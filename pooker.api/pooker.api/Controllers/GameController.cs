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
    public class GameController : PookerControllerBase
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

        [HttpGet("GetGamesByUser")]
        public async Task<IActionResult> GetGamesByUser()
        {
            var getGamesQuery = new GetGamesByUserQuery(this.UserId);
            var games = await this.queryServiceAsync.ExecuteAsync(getGamesQuery);
            var gamesResponse = this.mapper.Map<IEnumerable<GameResponse>>(games);

            return this.Ok(gamesResponse);
        }

        [HttpPost("CreateGame")]
        public async Task<IActionResult> CreateGame([FromBody] GameRequest req)
        {
            try
            {
                var insertUpdateGameCommand = new InsertUpdateGameCommand(req);
                await this.commandServiceAsync.ExecuteAsync(insertUpdateGameCommand);
                return this.Ok();
            }
            catch (Exception)
            {
                throw;
            }
        }

        [HttpGet("GetGameByGuid/{guid}")]
        public async Task<IActionResult> GetGameById(string guid)
        {
            var insertUpdateGameCommand = new AddUserToGameCommand(guid, this.UserId);
            await this.commandServiceAsync.ExecuteAsync(insertUpdateGameCommand);

            if (insertUpdateGameCommand.IsUserAdded)
            {
                await this.hubContext.Clients.All.BroadcastMessage(insertUpdateGameCommand.GameId);
            }

            var getGameQuery = new GetGameQueryById(guid);
            var game = await this.queryServiceAsync.ExecuteAsync(getGameQuery);
            var gameResponse = this.mapper.Map<GameResponse>(game);
            return this.Ok(gameResponse);
        }

        [HttpGet("GetCardsByGameId/{guid}")]
        public async Task<IActionResult> GetCardsByGameId(string guid)
        {
            var getCardsByGameIdQuery = new GetCardsByGameIdQuery(guid);
            var cards = await this.queryServiceAsync.ExecuteAsync(getCardsByGameIdQuery);

            return Ok(cards);
        }

    }
}
