﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.AspNetCore.Mvc.Rendering;
using WebApplication1.Models;

namespace WebApplication1.Pages.Service
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
        ViewData["MethodId"] = new SelectList(_context.PaymentMethod, "Id", "Method");
            return Page();
        }

        [BindProperty]
        public Services Services { get; set; }

        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://aka.ms/RazorPagesCRUD.
        public async Task<IActionResult> OnPostAsync()
        {
            if (!ModelState.IsValid)
            {
                return Page();
            }

            _context.Services.Add(Services);
            await _context.SaveChangesAsync();

            return RedirectToPage("./Index");
        }
    }
}
