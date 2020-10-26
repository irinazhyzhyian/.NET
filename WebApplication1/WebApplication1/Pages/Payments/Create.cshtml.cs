using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.AspNetCore.Mvc.Rendering;
using WebApplication1.Models;

namespace WebApplication1.Pages.Payments
{
    public class CreateModel : PageModel
    {
        private readonly WebApplication1.Models.PublicUtilitiesContext _context;

        public CreateModel(WebApplication1.Models.PublicUtilitiesContext context)
        {
            _context = context;
        }

        public IActionResult OnGet()
        {
        ViewData["ApartmentId"] = new SelectList(_context.Apartment, "Id", "Id");
        ViewData["ServiceId"] = new SelectList(_context.Services, "Id", "Id");
            return Page();
        }

        [BindProperty]
        public Payment Payment { get; set; }

        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://aka.ms/RazorPagesCRUD.
        public async Task<IActionResult> OnPostAsync()
        {
            if (!ModelState.IsValid)
            {
                return Page();
            }

            _context.Payment.Add(Payment);
            await _context.SaveChangesAsync();

            return RedirectToPage("./Index");
        }
    }
}
