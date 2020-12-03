using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

namespace Lab6.Shared.Models
{
    public partial class Apartment
    {
        public Apartment()
        {
            Payment = new HashSet<Payment>();
            Tenants = new HashSet<Tenants>();
        }

        public int Id { get; set; }
        public float? Area { get; set; }
        public string Address { get; set; }
        public int? TenantsCount { get; set; }

        public virtual ICollection<Payment> Payment { get; set; }
        public virtual ICollection<Tenants> Tenants { get; set; }

        /*public async Task<Apartment> GetApartment(int apartmentId)
        {
            var context = new PublicUtilitiesContext();
            return await context.Apartment
                .FirstOrDefaultAsync(d => d.Id == apartmentId);
        }*/

        public IEnumerable<Apartment> GetApartments()
        {
            var context = new PublicUtilitiesContext();
            return  context.Apartment.ToList();
        }



        public override string ToString()
        {
            StringBuilder apartment = new StringBuilder()
                .Append(Id)
                .Append("   ")
                .Append(Area)
                .Append("   ")
                .Append(Address)
                .Append("   ")
                .Append(TenantsCount);
            return apartment.ToString();
        }
    }
}
