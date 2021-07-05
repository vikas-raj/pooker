using AutoMapper;
using Pooker.Domain.Domain;
using Pooker.DTO.Response;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

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
