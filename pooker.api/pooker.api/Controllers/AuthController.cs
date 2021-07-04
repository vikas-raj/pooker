using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
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
        private IConfiguration configuration;

        public AuthController(IQueryServiceAsync queryServiceAsync, ICommandServiceAsync commandServiceAsync,
            IOptions<AppSettingsConfig> options, IConfiguration _configuration)
        {
            appSettingsConfig = options.Value;
            this.commandServiceAsync = commandServiceAsync;
            this.queryServiceAsync = queryServiceAsync;
            configuration = _configuration;

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

            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(configuration["Jwt:Key"]));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);
            var claims = new[] {
                    new Claim("Name",user.Username),
                    new Claim("Email",user.Email),
                    new Claim("userId",user.Id.ToString()),
                    //new Claim("userType",((UserType)user.UserType).ToString()),
                    new Claim(JwtRegisteredClaimNames.Jti,Guid.NewGuid().ToString())
            };

            var token = new JwtSecurityToken(
                       issuer: configuration["Jwt:Issuer"],
                       audience: configuration["Jwt:Issuer"],
                       claims: claims, expires: DateTime.Now.AddHours(1),
                       signingCredentials: credentials
                        );
            var tokenString = new JwtSecurityTokenHandler().WriteToken(token);

            return this.Ok(new { tokenString });
        }
    }
}
