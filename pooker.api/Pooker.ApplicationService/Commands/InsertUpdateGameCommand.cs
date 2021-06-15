namespace Pooker.ApplicationService.Commands
{
    using Pooker.ApplicationService.Configuration;
    using Pooker.Domain.Domain;
    using Pooker.DTO.Request;
    using Pooker.Infrastructure.Data.Configuration;
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
            dbContext.Game.Add(CreateGame());
        }

        private Game CreateGame()
        {
            return new Game()
            {
                AllowUserToChangeVote = this.gameRequest.AllowUserToChangeVote,
                MeinGame = this.gameRequest.MeinGame,
                IsAutoFlip = this.gameRequest.IsAutoFlip,
                Name = this.gameRequest.Name,
                Description = this.gameRequest.Description,
                UserId = this.gameRequest.UserId,
                ShowVelocityToUser = this.gameRequest.ShowVelocityToUser,
                Velocity = this.gameRequest.Velocity,
        };
    }
}
}
