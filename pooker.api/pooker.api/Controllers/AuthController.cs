using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using Pooker.ApplicationService.Commands;
using Pooker.ApplicationService.Configuration;
using Pooker.DTO;
using Pooker.DTO.Request;
using Pooker.Infrastructure.Query;
using Pooker.Infrastructure.Query.Interface;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace pooker.api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly AppSettingsConfig appSettingsConfig;
        private ICommandServiceAsync commandServiceAsync = null;
        private IQueryServiceAsync queryServiceAsync = null;

        public AuthController(IQueryServiceAsync queryServiceAsync, ICommandServiceAsync commandServiceAsync, IOptions<AppSettingsConfig> options)
        {
            appSettingsConfig = options.Value;
            this.commandServiceAsync = commandServiceAsync;
            this.queryServiceAsync = queryServiceAsync;
        }
        [HttpPost("RegisterUser")]
        public async Task<IActionResult> RegisterUser([FromBody] RegisterUserDto req)
        {
            var checkUserExistQuery = new CheckUserExistQuery(req.Email);
            var user = await this.queryServiceAsync.ExecuteAsync(checkUserExistQuery);
            if (user != null)
            {
                return this.Ok("Email already exists.");
            }
            var insertOrRegisterUserCommand = new InsertOrRegisterUserCommand(req);
            await this.commandServiceAsync.ExecuteAsync(insertOrRegisterUserCommand);
            return this.Ok("Sucess");
        }

        [HttpPost("LoginUser")]
        public async Task<IActionResult> LoginUser([FromBody] LoginUserDto req)
        {
            var loginUserQuery = new LoginUserQuery(req);
            var user = await this.queryServiceAsync.ExecuteAsync(loginUserQuery);

            if (user == null)
            {
                return this.Ok("Wrong Email and Password");
            }

            // generate token
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(appSettingsConfig.Token);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
                {
                    new Claim(ClaimTypes.NameIdentifier, user.ID.ToString()),
                    new Claim(ClaimTypes.Name, user.Username),
                    new Claim(ClaimTypes.Email, user.Email),
                    //AddClaim(userFromRepo.UserRole)
                }),
                Expires = DateTime.Now.AddDays(1),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key),
                    SecurityAlgorithms.HmacSha512Signature)
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            var tokenString = tokenHandler.WriteToken(token);
            return Ok(new { tokenString });
        }
    }
}
