using Microsoft.AspNetCore.Mvc;
using Pooker.DTO.Request;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace pooker.api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : Controller
    {

        [HttpPost("RegisterUser")]
        public async Task<IActionResult> RegisterUser([FromBody] RegisterUserDto req)
        {
            return this.Ok();
        }
        [HttpPost("LoginUser")]
        public async Task<IActionResult> LoginUser([FromBody] LoginUserDto req)
        {
            return this.Ok();
        }
    }
}
