using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using WebApplication1.Models;

namespace WebApplication1.Pages.Tenant
{
    public class EditModel : PageModel
    {
        private readonly WebApplication1.Models.PublicUtilitiesContext _context;

        public EditModel(WebApplication1.Models.PublicUtilitiesContext context)
        {
            _context = context;
        }

        [BindProperty]
        public Tenants Tenants { get; set; }

        public async Task<IActionResult> OnGetAsync(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            Tenants = await _context.Tenants
                .Include(t => t.Apartment).FirstOrDefaultAsync(m => m.Id == id);

            if (Tenants == null)
            {
                return NotFound();
            }
           ViewData["ApartmentId"] = new SelectList(_context.Apartment, "Id", "Id");
            return Page();
        }

        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://aka.ms/RazorPagesCRUD.
        public async Task<IActionResult> OnPostAsync()
        {
            if (!ModelState.IsValid)
            {
                return Page();
            }

            _context.Attach(Tenants).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TenantsExists(Tenants.Id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return RedirectToPage("./Index");
        }

        private bool TenantsExists(int id)
        {
            return _context.Tenants.Any(e => e.Id == id);
        }
    }
}
