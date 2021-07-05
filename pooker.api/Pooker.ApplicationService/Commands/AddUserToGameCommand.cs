namespace Pooker.ApplicationService.Commands
{
    using Pooker.ApplicationService.Configuration;
    using Pooker.Domain.Domain;
    using Pooker.Infrastructure.Data.Configuration;
    using System.Linq;
    using System.Threading.Tasks;
    public class AddUserToGameCommand : CommandAsync<DBContext>
    {
        private readonly int UserId;
        private readonly string GameGuid;
        public bool IsUserAdded { get; set; }

        public AddUserToGameCommand(string guid, int userId)
        {
            this.GameGuid = guid;
            this.UserId = userId;
        }

        public override async Task ExecuteAsync(DBContext dbContext)
        {
            var gameId = dbContext.Game.FirstOrDefault(x => x.Guid == this.GameGuid).Id;
            var gameUserXref = dbContext.GameUserXREF.
                FirstOrDefault(x => x.GameId == gameId &&
                x.UserId == this.UserId);
            this.IsUserAdded = false;
            if (gameUserXref == null)
            {
                dbContext.GameUserXREF.Add(this.CreateGameUserXref(gameId));
                dbContext.SaveChanges();
                this.IsUserAdded = true;
            }
        }

        private GameUserXREF CreateGameUserXref(int gameId)
        {
            return new GameUserXREF()
            {
                GameId = gameId,
                UserId = this.UserId
            };
        }
    }
}
