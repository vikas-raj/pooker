﻿using Microsoft.AspNetCore.Mvc;
using Pooker.ApplicationService.Commands;
using Pooker.DTO.Request;
using Pooker.Infrastructure.Query;
using Pooker.Infrastructure.Query.Interface;
using System.Threading.Tasks;

namespace pooker.api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GameController : ControllerBase
    {
        private IQueryServiceAsync queryServiceAsync = null;
        private ICommandServiceAsync commandServiceAsync = null;
        public GameController(IQueryServiceAsync queryServiceAsync, ICommandServiceAsync commandServiceAsync)
        {
            this.commandServiceAsync = commandServiceAsync;
            this.queryServiceAsync = queryServiceAsync;
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetGameById(int id)
        {
            var getGameQuery = new GetGameQueryById(id);
            var res = await this.queryServiceAsync.ExecuteAsync(getGameQuery);
            return this.Ok(res);
        }

        public async Task<IActionResult> CreateGame([FromBody]GameRequest req)
        {
            var insertUpdateGameCommand = new InsertUpdateGameCommand(req);
            await this.commandServiceAsync.ExecuteAsync(insertUpdateGameCommand);
            return this.Ok();
        }
    }
}
