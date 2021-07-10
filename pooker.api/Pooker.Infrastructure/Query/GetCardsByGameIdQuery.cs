using System;
using System.Collections.Generic;
using System.Text;

namespace Pooker.Infrastructure.Query
{
    using Microsoft.EntityFrameworkCore;
    using Pooker.Domain.Domain;
    using Pooker.Infrastructure.Data.Configuration;
    using System.Linq;
    using System.Threading.Tasks;
    public class GetCardsByGameIdQuery : QueryAsync<IEnumerable<Card>, DBContext>
    {
        private readonly string GameGuid = null;
        public GetCardsByGameIdQuery(string guid)
        {
            this.GameGuid = guid;
        }
        public override async Task<IEnumerable<Card>> ExecuteAsync(DBContext dbContext)
        {
            var game = dbContext.Game.FirstOrDefault(x => x.Guid == this.GameGuid);
            return await dbContext.Card.AsNoTracking()
                                  .Where(x => x.CardTypeId == game.CardTypeId).ToListAsync();
        }
    }
}
