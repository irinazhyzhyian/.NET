using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Lab6.Shared.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;


// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Lab6.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HomeController : ControllerBase
    {
        private readonly PublicUtilitiesContext _context;

        public HomeController(PublicUtilitiesContext context)
        {
            this._context = context;
        }
        // GET: api/
        [HttpGet]
    public ActionResult<IEnumerable<TenantsAndPaymentsKey>> Get()
        {
            
            var items =  _context.Tenants
           .Join(_context.Payment, tenants => tenants.ApartmentId, payment => payment.ApartmentId,
           (t, p) => new
           {
               ApartmentId = p.ApartmentId,
               Name = t.FirstName,
               Surname = t.LastName,
               Id = t.Id
           })
           .ToList()
           .GroupBy(e => new { e.Id, e.Name, e.Surname })
           .Where(t=>t.Count()>=3)
           .Select(e => new TenantsAndPaymentsKey
           {
               Name = e.Key.Name,
               Surname = e.Key.Surname,
               Count = e.Count(),
               Id = e.Key.Id,

           })
           .ToList();

            return items;
        }
    }
}
