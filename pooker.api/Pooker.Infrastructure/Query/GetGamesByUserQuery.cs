using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Pooker.Domain.Domain;
using Pooker.Infrastructure.Data.Configuration;

namespace Pooker.Infrastructure.Query
{
    public class GetGamesByUserQuery : QueryAsync<IEnumerable<Game>, DBContext>
    {
        private readonly int UserId;
        public GetGamesByUserQuery(int id)
        {
            this.UserId = id;
        }
        public override async Task<IEnumerable<Game>> ExecuteAsync(DBContext dbContext)
        {
            return await dbContext.GameUserXREF.AsNoTracking()
                           .Include(x => x.Game)
                           .ThenInclude(x => x.UserStoryDetails)
                           .ThenInclude(x => x.GameBoards)
                           .Include(x => x.Game)
                           .ThenInclude(x => x.CardType)
                           .Include(x => x.User)
                            .Where(x => x.UserId == this.UserId && !x.Game.IsDeleted).Select(a => new Game() { 
                                Name = a.Game.Name,
                                Velocity = a.Game.Velocity,
                                UserStoryDetails = a.Game.UserStoryDetails,
                                CreatedOn = a.Game.CreatedOn,
                                Description = a.Game.Description,
                                Guid = a.Game.Guid,
                                CardType = a.Game.CardType,
                            }).ToListAsync();
        }
    }
}
