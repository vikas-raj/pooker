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
using AutoMapper;
using Pooker.api.SignalR;
using Microsoft.AspNetCore.SignalR;
using Pooker.DTO.Response;
using System.Collections.Generic;

namespace pooker.api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class GameController : ControllerBase
    {
        private IQueryServiceAsync queryServiceAsync = null;
        private ICommandServiceAsync commandServiceAsync = null;
        private IMapper mapper;

        private readonly IHubContext<BroadCastHub, IHubClient> hubContext;
        public GameController(IQueryServiceAsync queryServiceAsync, ICommandServiceAsync commandServiceAsync,
            IHubContext<BroadCastHub, IHubClient> hubContext,
            IMapper mapper
            )
        {
            this.commandServiceAsync = commandServiceAsync;
            this.queryServiceAsync = queryServiceAsync;
            this.hubContext = hubContext;
            this.mapper = mapper;
        }

        [HttpGet("GetGameByGuid/{guid}")]
        public async Task<IActionResult> GetGameById(string guid)
        {
            var identity = HttpContext.User.Identity as ClaimsIdentity;

            var email = identity.Claims.FirstOrDefault(x => x.Type == "Email").Value;
            var name = identity.Claims.FirstOrDefault(x => x.Type == "Name").Value;
            var userId = Convert.ToInt32(identity.Claims.FirstOrDefault(x => x.Type == "userId").Value);

            var insertUpdateGameCommand = new AddUserToGameCommand(guid, userId);
            await this.commandServiceAsync.ExecuteAsync(insertUpdateGameCommand);

            if (insertUpdateGameCommand.IsUserAdded)
            {
                //await this.hubContext.Clients.All.BroadcastMessage();
            }

            var getGameQuery = new GetGameQueryById(guid);
            var game = await this.queryServiceAsync.ExecuteAsync(getGameQuery);
            var gameResponse = this.mapper.Map<GameResponse>(game);
            return this.Ok(gameResponse);
        }

        [HttpGet("GetGamesByUser")]
        public async Task<IActionResult> GetGamesByUser()
        {
            var identity = this.User.Identity as ClaimsIdentity;

            var userId = Convert.ToInt32(identity.Claims.FirstOrDefault(x => x.Type == "userId").Value);

            var getGamesQuery = new GetGamesByUserQuery(userId);
            var games = await this.queryServiceAsync.ExecuteAsync(getGamesQuery);
            var gamesResponse = this.mapper.Map<IEnumerable<GameResponse>>(games);

            return this.Ok(gamesResponse);
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
