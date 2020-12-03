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
    public class TenantsController : ControllerBase
    {
        private readonly PublicUtilitiesContext _context;
        public TenantsController(PublicUtilitiesContext context)
        {
            this._context = context;
        }
        // GET: api/<TenantsController>
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var tenants = await _context.Tenants.ToListAsync();
            return Ok(tenants);
        }

        // GET api/<TenantsController>/5
        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            var tenants = await _context.Tenants.FirstOrDefaultAsync(a => a.Id == id);
            return Ok(tenants);
        }

        // POST api/<TenantsController>
        [HttpPost]
        public async Task<IActionResult> Post(Tenants tenants)
        {
            _context.Add(tenants);
            await _context.SaveChangesAsync();
            return Ok(tenants.Id);
        }

        // PUT api/<TenantsController>/5
        [HttpPut]
        public async Task<IActionResult> Put(Tenants tenants)
        {
            _context.Entry(tenants).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return NoContent();
        }

        // DELETE api/<TenantsController>/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var tenants = new Tenants { Id = id };
            _context.Remove(tenants);
            await _context.SaveChangesAsync();
            return NoContent();
        }
    }
}
