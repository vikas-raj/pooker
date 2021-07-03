using Microsoft.AspNetCore.Mvc;
using Pooker.ApplicationService.Commands;
using Pooker.ApplicationService.Configuration;
using Pooker.DTO.Request;
using Pooker.Infrastructure.Query;
using Pooker.Infrastructure.Query.Interface;
using System.Threading.Tasks;
using System.Security.Claims;
using System.Linq;
using System;
using Microsoft.AspNetCore.Authorization;

namespace pooker.api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class GameController : ControllerBase
    {
        private IQueryServiceAsync queryServiceAsync = null;
        private ICommandServiceAsync commandServiceAsync = null;
        public GameController(IQueryServiceAsync queryServiceAsync, ICommandServiceAsync commandServiceAsync)
        {
            this.commandServiceAsync = commandServiceAsync;
            this.queryServiceAsync = queryServiceAsync;
        }

        [HttpGet("GetGamesByGuid/{guid}")]
        public async Task<IActionResult> GetGameById(string guid)
        {
            var identity = HttpContext.User.Identity as ClaimsIdentity;

            var email = identity.Claims.FirstOrDefault(x => x.Type == "Email").Value;
            var name = identity.Claims.FirstOrDefault(x => x.Type == "Name").Value;
            var userId = Convert.ToInt32(identity.Claims.FirstOrDefault(x => x.Type == "userId").Value);
            
            var getGameQuery = new GetGameQueryById(guid);
            var res = await this.queryServiceAsync.ExecuteAsync(getGameQuery);
            return this.Ok(res);
        }

        [HttpGet("GetGamesByUser")]
        public async Task<IActionResult> GetGamesByUser()
        {
            var identity = this.User.Identity as ClaimsIdentity;

            var userId = Convert.ToInt32(identity.Claims.FirstOrDefault(x => x.Type == "userId").Value);

            var getGamesQuery = new GetGamesByUserQuery(userId);
            var res = await this.queryServiceAsync.ExecuteAsync(getGamesQuery);
            return this.Ok(res);
        }

        [HttpPost("CreateGame")]
        public async Task<IActionResult> CreateGame([FromBody] GameRequest req)
        {
            var insertUpdateGameCommand = new InsertUpdateGameCommand(req);
            await this.commandServiceAsync.ExecuteAsync(insertUpdateGameCommand);
            return this.Ok();
        }
    }
}
