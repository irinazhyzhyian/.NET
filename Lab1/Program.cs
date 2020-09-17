﻿using Npgsql;
using System;
using System.Collections.Generic;
using System.Text;

namespace Lab1
{
    class Program
    {
        public static List<object[]> GetResult(NpgsqlConnection connection, string select, string from)
        {
            var sqlStatement = string.Format("SELECT {0} FROM {1}", select, from);

            try
            { 
                connection.Open();
            
                List<object[]> result = new List<object[]>();
                using (NpgsqlCommand command = new NpgsqlCommand(sqlStatement, connection))
                {
                    using (NpgsqlDataReader dataReader = command.ExecuteReader())
                    {
                        while (dataReader.Read())
                        {
                            var values = new object[dataReader.FieldCount];
                            for (int i = 0; i < dataReader.FieldCount; i++)
                            {
                                values[i] = dataReader[i];
                            }
                            result.Add(values);
                        }
                    }
                }
                connection.Close();
                return result;
            }
            catch (NpgsqlException e)
            {
                Console.WriteLine(e.ToString());
                return null;
            }

        }

        public static void PrintData(List<object[]> list)
        {
            int count = 0;
            foreach (object[] element in list)
            {
                count++;
                StringBuilder sb = new StringBuilder();
                foreach (var v in element) {
                    sb.Append(v.ToString());
                    sb.Append("   |   ");
                   }
            Console.WriteLine(sb);
            }
            Console.WriteLine($"Number of elements: {count}");
        }

        static void Main(string[] args)
        {
            try
            {
                NpgsqlConnectionStringBuilder builder = new NpgsqlConnectionStringBuilder
                {
                    ConnectionString = "Server=127.0.0.1;Port=5432;User Id=postgres;Password=123456;Database=public_utilities;"
                };

                using NpgsqlConnection connection = new NpgsqlConnection(builder.ConnectionString);
                Console.WriteLine("\nБаза даних повинна містити інформацію:");
                Console.WriteLine("=========================================\n\n");
                Console.WriteLine("\n10 квартиронаймачів:\n");
                List<object[]> tenants = GetResult(connection, "*", "tenants");
                PrintData(tenants);

                Console.WriteLine("=========================================\n\n");
                Console.WriteLine("\n5 видів послуг. Вартість одних послуг повинна визначатись площею квартири, інших - к-стю осіб, що проживає:");
                List<object[]> services = GetResult(connection, "method, price, service", "services CROSS JOIN payment_method");
                PrintData(services);

                Console.WriteLine("=========================================\n\n");
                Console.WriteLine("\nПередбачити, що кожен квариронаймач користується 3+ послугами:\n(Запит виводить тих осіб які корист. 3+ послугами)\n");
                List<object[]> tenants_service = GetResult(connection, "DISTINCT first_name||' '||father_name||' '||last_name, account_number", "payment  CROSS JOIN tenants WHERE(SELECT COUNT(payment.id) FROM payment WHERE tenants.apartment_id = payment.apartment_id) > 2");
                PrintData(tenants_service);
                Console.WriteLine("________________________________________\n\n");
                Console.WriteLine("\nКвартиронаймач та кількість послуг якими він користується:\n");
                tenants_service = GetResult(connection, "DISTINCT first_name||' '||father_name||' '||last_name, (SELECT COUNT(payment.id) FROM payment WHERE tenants.apartment_id = payment.apartment_id)", "payment  CROSS JOIN tenants");
                PrintData(tenants_service);

                Console.WriteLine("=========================================\n\n");
                Console.WriteLine("\nКвартири:\n");
                List<object[]> apartment = GetResult(connection, "*", "apartment");
                PrintData(apartment);
            }
            catch (NpgsqlException e)
            {
                Console.WriteLine(e.ToString());
            }
            Console.WriteLine("\nDone. Press enter.");
            Console.ReadLine();
        }
    }
}
