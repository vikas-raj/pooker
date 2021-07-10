namespace Pooker.ApplicationService.Commands
{
    using Pooker.ApplicationService.Configuration;
    using Pooker.Domain.Domain;
    using Pooker.DTO.Request;
    using Pooker.Infrastructure.Data.Configuration;
    using System;
    using System.Threading.Tasks;
    public class InsertUpdateGameCommand : CommandAsync<DBContext>
    {
        private readonly GameRequest gameRequest = null;
        public InsertUpdateGameCommand(GameRequest gameRequest)
        {
            this.gameRequest = gameRequest;
        }

        public override async Task ExecuteAsync(DBContext dbContext)
        {
            var game = CreateGame();
            game.GameUserXREFs.Add(CreateGameUserXREF());
            dbContext.Game.Add(game);
            dbContext.SaveChangesAsync();
        }

        private Game CreateGame()
        {
            return new Game()
            {
                AllowUserToChangeVote = this.gameRequest.AllowUserToChangeVote,
                MeInGame = this.gameRequest.MeInGame,
                IsAutoFlip = this.gameRequest.IsAutoFlip,
                Name = this.gameRequest.Name,
                Description = this.gameRequest.Description,
                UserId = this.gameRequest.UserId,
                ShowVelocityToUser = this.gameRequest.ShowVelocityToUser,
                Velocity = this.gameRequest.Velocity,
                CardTypeId = 3,
                Guid = Guid.NewGuid().ToString(),
            };
        }

        private GameUserXREF CreateGameUserXREF() {
            return new GameUserXREF()
            {
                UserId = this.gameRequest.UserId,
            };
        }
    }
}
