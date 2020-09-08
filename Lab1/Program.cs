using Npgsql;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Lab1
{
    class Program
    {
        public static List<object[]> GetResult(NpgsqlConnection connection, string select, string from, string where)
        {
            var sqlStatement = string.Format("SELECT {0} FROM {1} WHERE {2}", select, from, where);

            //var sqlCommand = new NpgsqlCommand(sqlStatement, connection);
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

        public static void printData(List<object[]> list)
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
                NpgsqlConnectionStringBuilder builder = new NpgsqlConnectionStringBuilder();

                builder.ConnectionString = "Server=127.0.0.1;Port=5432;User Id=postgres;Password=123456;Database=public_utilities;";

                using (NpgsqlConnection connection = new NpgsqlConnection(builder.ConnectionString))
                {
                    Console.WriteLine("\nБаза даних повинна містити інформацію:");
                    Console.WriteLine("=========================================\n\n");
                    Console.WriteLine("\n10 квартиронаймачів:\n");
                    List<object[]> tenants = GetResult(connection, "*", "tenants", "true");
                    printData(tenants);

                    Console.WriteLine("=========================================\n\n");
                    Console.WriteLine("\n5 видів послуг. Вартість одних послуг повинна визначатись площею квартири, інших - к-стю осіб, що проживає:");
                    List<object[]> services = GetResult(connection, "id_service, method, price, service", "services NATURAL JOIN payment_method", "true");
                    printData(services);

                    Console.WriteLine("=========================================\n\n");
                    Console.WriteLine("\nПередбачити, що кожен квариронаймач користується 3+ послугами:\n");
                    List<object[]> tenants_service = GetResult(connection, "first_name||' '||father_name||' '||last_name, services.service", "payment NATURAL JOIN services NATURAL JOIN apartment NATURAL JOIN tenants", "true");
                    printData(tenants_service);

                    Console.WriteLine("=========================================\n\n");
                    Console.WriteLine("\nКвартири:\n");
                    List<object[]> apartment = GetResult(connection, "*", "apartment", "true");
                    printData(apartment);


                }
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
