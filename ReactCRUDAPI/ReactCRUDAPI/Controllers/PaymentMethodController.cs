using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ReactCRUDAPI.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;


// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ReactCRUDAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PaymentMethodController : ControllerBase
    {
        private readonly PublicUtilitiesContext _context;

        public PaymentMethodController(PublicUtilitiesContext context)
        {
            this._context = context;
        }

        // GET: api/<PaymentMethodController>
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var paymentmethod = await _context.PaymentMethod.ToListAsync();
            return Ok(paymentmethod);
        }

        // GET api/<PaymentMethodController>/5
        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            var paymentmethod = await _context.PaymentMethod.FirstOrDefaultAsync(a => a.Id == id);
            return Ok(paymentmethod);
        }

        // POST api/<PaymentMethodController>
        [HttpPost]
        public async Task<IActionResult> Post(PaymentMethod paymentmethod)
        {
            _context.Add(paymentmethod);
            await _context.SaveChangesAsync();
            return Ok(paymentmethod.Id);
        }

        // PUT api/<PaymentMethodController>/5
        [HttpPut]
        public async Task<IActionResult> Put(PaymentMethod paymentmethod)
        {
            _context.Entry(paymentmethod).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return NoContent();
        }

        // DELETE api/<PaymentMethodController>/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var payment = new PaymentMethod { Id = id };
            _context.Remove(payment);
            await _context.SaveChangesAsync();
            return NoContent();
        }
    }
}
