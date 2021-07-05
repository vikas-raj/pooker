using System;
using System.Collections.Generic;
using System.Text;

namespace Pooker.DTO.Response
{
    public class GameResponse : EntityResponse
    {
        public string Guid { get; set; }
        public int Velocity { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public bool ShowVelocityToUser { get; set; }
        public bool MeInGame { get; set; }
        public bool IsAutoFlip { get; set; }
        public UserResponse User { get; set; }
        public  ICollection<UserStoryDetailResponse> UserStoryDetails { get; set; }
        public  ICollection<GameUserXREFResponse> GameUserXREFs { get; set; }
    }
}
