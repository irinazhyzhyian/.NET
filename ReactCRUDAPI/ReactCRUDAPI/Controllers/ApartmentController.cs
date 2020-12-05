using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ReactCRUDAPI.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ReactCRUDAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ApartmentController : ControllerBase
    {
        private readonly PublicUtilitiesContext _context;
        public ApartmentController(PublicUtilitiesContext context)
        {
            this._context = context;
        }

        // GET: api/<ApartmentController>
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var apartments = await _context.Apartment.ToListAsync();
            return Ok(apartments);
        }

        // GET api/<ValuesController>/5
        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            var apartment = await _context.Apartment.FirstOrDefaultAsync(a => a.Id == id);
            return Ok(apartment);
        }

        // POST api/<ValuesController>
        [HttpPost]
        public async Task<IActionResult> Post(Apartment apartment)
        {
            _context.Add(apartment);
            await _context.SaveChangesAsync();
            return Ok(apartment.Id);
        }

        // PUT api/<ValuesController>/5
        [HttpPut]
        public async Task<IActionResult> Put(Apartment apartment)
        {
            _context.Entry(apartment).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return NoContent();
        }

        // DELETE api/<ValuesController>/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var apartment = new Apartment { Id = id };
            _context.Remove(apartment);
            await _context.SaveChangesAsync();
            return NoContent();
        }

    }
}
