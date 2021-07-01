using Microsoft.AspNetCore.Mvc;
using Pooker.ApplicationService.Commands;
using Pooker.ApplicationService.Configuration;
using Pooker.DTO.Request;
using Pooker.Infrastructure.Query.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace pooker.api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private ICommandServiceAsync commandServiceAsync = null;
        private IQueryServiceAsync queryServiceAsync = null;

        public AuthController(IQueryServiceAsync queryServiceAsync, ICommandServiceAsync commandServiceAsync)
        {
            this.commandServiceAsync = commandServiceAsync;
            this.queryServiceAsync = queryServiceAsync;
        }
        [HttpPost("RegisterUser")]
        public async Task<IActionResult> RegisterUser([FromBody] RegisterUserDto req)
        {
            var insertOrRegisterUserCommand = new InsertOrRegisterUserCommand(req);
            await this.commandServiceAsync.ExecuteAsync(insertOrRegisterUserCommand);
            return this.Ok();
        }

        [HttpPost("LoginUser")]
        public async Task<IActionResult> LoginUser([FromBody] LoginUserDto req)
        {
            return this.Ok();
        }
    }
}
