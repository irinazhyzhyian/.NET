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
    public class ServicesController : ControllerBase
    {

        private readonly PublicUtilitiesContext _context;

        public ServicesController(PublicUtilitiesContext context)
        {
            this._context = context;
        }
        // GET: api/<ServicesController>
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var services = await _context.Services.ToListAsync();
            return Ok(services);
        }

        // GET api/<ServicesController>/5
        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            var services = await _context.Services.FirstOrDefaultAsync(a => a.Id == id);
            return Ok(services);
        }

        // POST api/<ServicesController>
        [HttpPost]
        public async Task<IActionResult> Post(Services services)
        {
            _context.Add(services);
            await _context.SaveChangesAsync();
            return Ok(services.Id);
        }

        // PUT api/<ServicesController>/5
        [HttpPut]
        public async Task<IActionResult> Put(Services services)
        {
            _context.Entry(services).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return NoContent();
        }

        // DELETE api/<ServicesController>/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var services = new Services { Id = id };
            _context.Remove(services);
            await _context.SaveChangesAsync();
            return NoContent();
        }
    }
}
