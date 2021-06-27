using Microsoft.EntityFrameworkCore;
using Pooker.Domain.Domain;
using Pooker.Infrastructure.Data.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Pooker.Infrastructure.Query
{
    public class GetGameQueryById : QueryAsync<Game, DBContext>
    {
        private readonly string GameGuidId;
        public GetGameQueryById(string id)
        {
            this.GameGuidId = id;
        }

        public override async Task<Game> ExecuteAsync(DBContext dbContext)
        {
            return dbContext.Game.AsNoTracking()
                            .Include(x => x.UserStoryDetails)
                            .ThenInclude(x => x.GameBoards)
                            .FirstOrDefault(x => x.Guid == this.GameGuidId);
        }
    }
}
