using System;
using System.Collections.Generic;
using System.Text;

namespace Pooker.ApplicationService.Commands
{
    using Pooker.ApplicationService.Configuration;
    using Pooker.Domain.Domain;
    using Pooker.DTO.Request;
    using Pooker.Infrastructure.Data.Configuration;
    using System.Linq;
    using System.Threading.Tasks;
    public class AddUserToGameBoardCommand : CommandAsync<DBContext>
    {
        private readonly UserGameBoardDto userGameBoardDto = null;

        public AddUserToGameBoardCommand(UserGameBoardDto userGameBoardDto)
        {
            this.userGameBoardDto = userGameBoardDto;
        }

        public override async Task ExecuteAsync(DBContext dbContext)
        {
            var gameBoard = dbContext.GameBoard.FirstOrDefault(x => x.UserId == this.userGameBoardDto.UserId
            && x.UserStoryDetailId == this.userGameBoardDto.UserStoryDetailId);

            if (gameBoard == null)
            {
                gameBoard = this.CreateGameBoardForUser();
                dbContext.GameBoard.Add(gameBoard);
            }
            else
            {
                gameBoard.UserId = this.userGameBoardDto.UserId;
                gameBoard.StoryPoint = this.userGameBoardDto.StoryPoint;
            }

            await dbContext.SaveChangesAsync();
        }

        public GameBoard CreateGameBoardForUser()
        {
            return new GameBoard()
            {
                StoryPoint = this.userGameBoardDto.StoryPoint,
                UserId = this.userGameBoardDto.UserId,
                UserStoryDetailId = this.userGameBoardDto.UserStoryDetailId
            };
        }
    }
}
