using AutoMapper;
using Pooker.Domain.Domain;
using Pooker.DTO.Response;

namespace pooker.api.Profiles
{
    public class GameProfile: Profile
    {
        public GameProfile()
        {
            this.CreateMap<User, UserResponse>();
            this.CreateMap<Game, GameResponse>();
            this.CreateMap<GameBoard, GameBoardResponse>();
            this.CreateMap<UserStoryDetail, UserStoryDetailResponse>();
            this.CreateMap<GameUserXREF, GameUserXREFResponse>();
        }
    }
}
