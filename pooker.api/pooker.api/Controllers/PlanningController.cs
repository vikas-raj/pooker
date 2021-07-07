namespace pooker.api.Controllers
{
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
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class PlanningController : PookerControllerBase
    {
        private IQueryServiceAsync queryServiceAsync = null;
        private ICommandServiceAsync commandServiceAsync = null;
        private IMapper mapper;

        private readonly IHubContext<BroadCastHub, IHubClient> hubContext;
        public PlanningController(IQueryServiceAsync queryServiceAsync, ICommandServiceAsync commandServiceAsync,
            IHubContext<BroadCastHub, IHubClient> hubContext,
            IMapper mapper)
        {
            this.commandServiceAsync = commandServiceAsync;
            this.queryServiceAsync = queryServiceAsync;
            this.hubContext = hubContext;
            this.mapper = mapper;
        }

        //[HttpPost("InsertUpdateGameBoard")]
        //public async Task<IActionResult> InsertUpdateGameBoard([FromBody] UserGameBoardDto req)
        //{
        //    var insertUpdateGameCommand = new AddUserToGameBoardCommand(req);
        //    await this.commandServiceAsync.ExecuteAsync(insertUpdateGameCommand);
        //    return this.Ok();
        //}

        [HttpPost("InsertUpdateUserStory")]
        public async Task<IActionResult> InsertUpdateUserStory([FromBody] UserStoryDto req)
        {
            var insertUpdateGameCommand = new InsertUpdateUserStoryCommand(req);
            await this.commandServiceAsync.ExecuteAsync(insertUpdateGameCommand);
            await this.hubContext.Clients.All.BroadcastMessage(insertUpdateGameCommand.GameId);
            return this.Ok();
        }

        [HttpPost("InsertUpdateGameBoard")]
        public async Task<IActionResult> InsertUpdateGameBoard([FromBody] GameBoardDto req)
        {
            var insertUpdateGameCommand = new InsertUpdateGameBoardCommand(req, this.UserId);
            await this.commandServiceAsync.ExecuteAsync(insertUpdateGameCommand);
            return this.Ok();
        }
    }
}
