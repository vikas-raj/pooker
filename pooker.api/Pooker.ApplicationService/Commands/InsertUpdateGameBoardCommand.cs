namespace Pooker.ApplicationService.Commands
{
    using Pooker.ApplicationService.Configuration;
    using Pooker.Domain.Domain;
    using Pooker.DTO.Request;
    using Pooker.Infrastructure.Data.Configuration;
    using System.Linq;
    using System.Threading.Tasks;
    public class InsertUpdateGameBoardCommand : CommandAsync<DBContext>
    {
        private readonly GameBoardDto gameBoardDto = null;
        private readonly int userId;
        public InsertUpdateGameBoardCommand(GameBoardDto gameBoardDto, int userId)
        {
            this.gameBoardDto = gameBoardDto;
            this.userId = userId;
        }

        public override async Task ExecuteAsync(DBContext dbContext)
        {
            var gameBoard = dbContext.GameBoard.FirstOrDefault(x => x.UserId == this.userId && x.UserStoryDetailId == this.gameBoardDto.StoryId);
            if (gameBoard == null)
            {
                gameBoard = this.CreateGameBoard();
            }
            else
            {
                //gameBoard.StoryPoint = this.gameBoardDto.StoryPoint;
            }

            await dbContext.SaveChangesAsync();
        }

        private GameBoard CreateGameBoard()
        {
            return new GameBoard()
            {
                UserId = this.userId,
                UserStoryDetailId = this.gameBoardDto.StoryId,
                //StoryPoint = this.gameBoardDto.StoryPoint,
            };
        }
    }
}
