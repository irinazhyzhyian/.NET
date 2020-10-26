using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using WebApplication1.Models;

namespace WebApplication1.Pages.Payments
{
    public class DetailsModel : PageModel
    {
        private readonly WebApplication1.Models.PublicUtilitiesContext _context;

        public DetailsModel(WebApplication1.Models.PublicUtilitiesContext context)
        {
            _context = context;
        }

        public Payment Payment { get; set; }

        public async Task<IActionResult> OnGetAsync(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            Payment = await _context.Payment
                .Include(p => p.Apartment)
                .Include(p => p.Service).FirstOrDefaultAsync(m => m.Id == id);

            if (Payment == null)
            {
                return NotFound();
            }
            return Page();
        }
    }
}
