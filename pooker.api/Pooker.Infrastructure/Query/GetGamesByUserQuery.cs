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
    public class GetGamesByUserQuery : QueryAsync<List<Game>, DBContext>
    {
        private readonly int UserId;
        public GetGamesByUserQuery(int id)
        {
            this.UserId = id;
        }
        public override async Task<List<Game>> ExecuteAsync(DBContext dbContext)
        {
            return dbContext.Game.AsNoTracking()
                            .Include(x => x.UserStoryDetails)
                            .ThenInclude(x => x.GameBoards)
                            .Where(x => x.UserId == this.UserId).ToList();
        }
    }
}
