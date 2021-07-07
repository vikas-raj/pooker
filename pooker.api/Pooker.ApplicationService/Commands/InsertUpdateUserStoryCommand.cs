﻿namespace Pooker.ApplicationService.Commands
{
    using Microsoft.EntityFrameworkCore;
    using Pooker.ApplicationService.Configuration;
    using Pooker.Domain.Domain;
    using Pooker.DTO.Request;
    using Pooker.Infrastructure.Data.Configuration;
    using System.Linq;
    using System.Threading.Tasks;

    public class InsertUpdateUserStoryCommand : CommandAsync<DBContext>
    {
        private readonly UserStoryDto userStoryDto = null;
        public int GameId;
        public InsertUpdateUserStoryCommand(UserStoryDto userStoryDto)
        {
            this.userStoryDto = userStoryDto;
        }
        public override async Task ExecuteAsync(DBContext dbContext)
        {
            var userStoryDetails = dbContext.UserStoryDetail.Where(x => x.GameId == this.userStoryDto.GameId);

            foreach (var item in userStoryDetails)
            {
                item.IsUserStoryActive = false;
                item.IsCurrentUserStory = false;
            }
            var userStoryDetail = dbContext.UserStoryDetail.Include(x => x.Game).FirstOrDefault(x => x.Id == this.userStoryDto.Id);
            if (userStoryDetail == null)
            {
                userStoryDetail = this.CreateUserStoryDetail();
                dbContext.UserStoryDetail.Add(userStoryDetail);
            }
            else
            {
                userStoryDetail.IsUserStoryActive = this.userStoryDto.IsUserStoryActive;
                userStoryDetail.IsCurrentUserStory = true;
                userStoryDetail.StoryName = this.userStoryDto.StoryName;
                userStoryDetail.StoryPoint = this.userStoryDto.StoryPoint;
            }
            await dbContext.SaveChangesAsync();
            this.GameId = userStoryDetail.GameId;
        }

        private UserStoryDetail CreateUserStoryDetail()
        {
            return new UserStoryDetail()
            {
                IsCurrentUserStory = true,
                IsUserStoryActive = true,
                StoryName = this.userStoryDto.StoryName,
                GameId = this.userStoryDto.GameId,
            };
        }
    }
}
