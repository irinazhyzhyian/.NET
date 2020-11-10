using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using WebApplication1.Models;

namespace WebApplication1.Pages.PaymentMethods
{
    public class DeleteModel : PageModel
    {
        private readonly WebApplication1.Models.PublicUtilitiesContext _context;

        public DeleteModel(WebApplication1.Models.PublicUtilitiesContext context)
        {
            _context = context;
        }

        [BindProperty]
        public PaymentMethod PaymentMethod { get; set; }

        public async Task<IActionResult> OnGetAsync(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            PaymentMethod = await _context.PaymentMethod.FirstOrDefaultAsync(m => m.Id == id);

            if (PaymentMethod == null)
            {
                return NotFound();
            }
            return Page();
        }

        public async Task<IActionResult> OnPostAsync(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            PaymentMethod = await _context.PaymentMethod.FindAsync(id);

            if (PaymentMethod != null)
            {
                _context.PaymentMethod.Remove(PaymentMethod);
                await _context.SaveChangesAsync();
            }

            return RedirectToPage("./Index");
        }
    }
}
