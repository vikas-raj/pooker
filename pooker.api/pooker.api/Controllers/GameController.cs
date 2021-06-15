using Microsoft.AspNetCore.Mvc;
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

        public GameController(IQueryServiceAsync queryServiceAsync)
        {
            this.queryServiceAsync = queryServiceAsync;
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetGameById(int id)
        {
            var getGameQuery = new GetGameQueryById(1);
            var res = await this.queryServiceAsync.ExecuteAsync(getGameQuery);
            return this.Ok();
        }
    }
}
