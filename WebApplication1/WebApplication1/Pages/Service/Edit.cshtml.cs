using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using WebApplication1.Models;

namespace WebApplication1.Pages.Service
{
    public class EditModel : PageModel
    {
        private readonly WebApplication1.Models.PublicUtilitiesContext _context;

        public EditModel(WebApplication1.Models.PublicUtilitiesContext context)
        {
            _context = context;
        }

        [BindProperty]
        public Services Services { get; set; }

        public async Task<IActionResult> OnGetAsync(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            Services = await _context.Services
                .Include(s => s.Method).FirstOrDefaultAsync(m => m.Id == id);

            if (Services == null)
            {
                return NotFound();
            }
           ViewData["MethodId"] = new SelectList(_context.PaymentMethod, "Id", "Method");
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

            _context.Attach(Services).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ServicesExists(Services.Id))
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

        private bool ServicesExists(int id)
        {
            return _context.Services.Any(e => e.Id == id);
        }
    }
}
