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

    [Route("api/[controller]")]
    [ApiController]
    public class PlanningController : ControllerBase
    {
        private IQueryServiceAsync queryServiceAsync = null;
        private ICommandServiceAsync commandServiceAsync = null;
        public PlanningController(IQueryServiceAsync queryServiceAsync, ICommandServiceAsync commandServiceAsync)
        {
            this.commandServiceAsync = commandServiceAsync;
            this.queryServiceAsync = queryServiceAsync;
        }

        [HttpPost("InsertUpdateGameBoard")]
        public async Task<IActionResult> InsertUpdateGameBoard([FromBody] UserGameBoardDto req)
        {
            var insertUpdateGameCommand = new AddUserToGameBoardCommand(req);
            await this.commandServiceAsync.ExecuteAsync(insertUpdateGameCommand);
            return this.Ok();
        }

        [HttpPost("InsertUpdateUserStory")]
        public async Task<IActionResult> InsertUpdateUserStory([FromBody] UserStoryDto req)
        {
            var insertUpdateGameCommand = new InserUpdateUserStoryCommand(req);
            await this.commandServiceAsync.ExecuteAsync(insertUpdateGameCommand);
            return this.Ok();
        }
    }
}
