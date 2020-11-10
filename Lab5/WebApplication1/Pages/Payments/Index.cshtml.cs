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
    public class IndexModel : PageModel
    {
        private readonly WebApplication1.Models.PublicUtilitiesContext _context;

        public IndexModel(WebApplication1.Models.PublicUtilitiesContext context)
        {
            _context = context;
        }

        public IList<Payment> Payment { get;set; }

        public async Task OnGetAsync()
        {
            Payment = await _context.Payment
                .Include(p => p.Apartment)
                .Include(p => p.Service).ToListAsync();
        }
    }
}
