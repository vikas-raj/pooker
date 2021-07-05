namespace Pooker.Infrastructure.Query
{
    using Microsoft.EntityFrameworkCore;
    using Pooker.Domain.Domain;
    using Pooker.Infrastructure.Data.Configuration;
    using System.Linq;
    using System.Threading.Tasks;
    public class GetGameQueryById : QueryAsync<Game, DBContext>
    {
        private readonly int UserId;
        private readonly string GameGuid;

        public GetGameQueryById(string guid)
        {
            this.GameGuid = guid;
        }

        public override async Task<Game> ExecuteAsync(DBContext dbContext)
        {
            return dbContext.Game.AsNoTracking()
                            .Include(x => x.GameUserXREFs)
                            .Include(x => x.UserStoryDetails)
                            .ThenInclude(x => x.GameBoards)
                            .FirstOrDefault(x => x.Guid == this.GameGuid);
        }
    }
}
