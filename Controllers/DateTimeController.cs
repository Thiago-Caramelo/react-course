using System;
using Microsoft.AspNetCore.Mvc;

namespace DotNetReact.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class DateTimeController : ControllerBase
    {
        [HttpGet]
        public DateTime Get()
        {
            System.Threading.Thread.Sleep(4000);
            return DateTime.UtcNow;
        }
    }
}
