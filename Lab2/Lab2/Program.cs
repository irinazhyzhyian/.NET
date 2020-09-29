using Lab2.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;

namespace Lab2
{
    class Program
    {
        static void Main(string[] args)
        {
            var context = new PublicUtilitiesContext();

            Console.WriteLine("\nБаза даних повинна мiстити iнформацiю:");
            Console.WriteLine("=========================================\n\n");

            Console.WriteLine("\n10 квартиронаймачiв:\n");
            var tenants = context.Tenants.ToList();
            Console.WriteLine(string.Join("\n",tenants));

            Console.WriteLine("=========================================\n\n");
            Console.WriteLine("\n5 видiв послуг. Вартiсть одних послуг повинна визначатись площею квартири, iнших - к-стю осiб, що проживає:\n");
            var services = context.Services.ToList();
            Console.WriteLine(string.Join("\n", services));

            Console.WriteLine("=========================================\n\n");
            Console.WriteLine("\nПередбачити, що кожен квариронаймач користується 3+ послугами:\n\n");
            var query = from t in context.Tenants
                                 where (from a in context.Apartment
                                        join p in context.Payment on a.Id equals p.ApartmentId
                                        where t.ApartmentId == p.ApartmentId
                                        select p.ApartmentId).Count() > 2
                                 select t;
            var tenant_service = query.ToList();
            foreach (Tenants t in tenant_service){
                Console.WriteLine(t.ToString());
            }
           

            Console.WriteLine("=========================================\n\n");
            Console.WriteLine("\nКвартири:\n");
            var apartments = context.Apartment.ToList();
            Console.WriteLine(string.Join("\n", apartments));

            Console.WriteLine("\nDone.");
            Console.ReadLine();

        }

    }
}
