using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using WebApplication1.Models;

namespace WebApplication1.Pages.Service
{
    public class IndexModel : PageModel
    {
        private readonly WebApplication1.Models.PublicUtilitiesContext _context;

        public IndexModel(WebApplication1.Models.PublicUtilitiesContext context)
        {
            _context = context;
        }

        public IList<Services> Services { get;set; }

        public async Task OnGetAsync()
        {
            Services = await _context.Services
                .Include(s => s.Method).ToListAsync();
        }
    }
}
