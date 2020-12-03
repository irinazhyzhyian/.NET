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
    public class PaymentController : ControllerBase
    {
        private readonly PublicUtilitiesContext _context;

        public PaymentController(PublicUtilitiesContext context)
        {
            this._context = context;
        }

        // GET: api/<PaymentController>
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var payment = await _context.Payment.ToListAsync();
            return Ok(payment);
        }

        // GET api/<PaymentController>/5
        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            var payment = await _context.Payment.FirstOrDefaultAsync(a => a.Id == id);
            return Ok(payment);
        }

        // POST api/<PaymentController>
        [HttpPost]
        public async Task<IActionResult> Post(Payment payment)
        {
            _context.Add(payment);
            await _context.SaveChangesAsync();
            return Ok(payment.Id);
        }

        // PUT api/<PaymentController>/5
        [HttpPut]
        public async Task<IActionResult> Put(Payment payment)
        {
            try
            {
                _context.Entry(payment).State = EntityState.Modified;
                _context.SaveChanges();
                return NoContent();
            }
            catch
            {
                throw;
            }
            
        }

        // DELETE api/<PaymentController>/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var payment = new Payment { Id = id };
            _context.Remove(payment);
            await _context.SaveChangesAsync();
            return NoContent();
        }
    }
}
