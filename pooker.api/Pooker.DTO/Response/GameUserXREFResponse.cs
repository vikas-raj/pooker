using System;
using System.Collections.Generic;
using System.Text;

namespace Pooker.DTO.Response
{
    public class GameUserXREFResponse : EntityResponse
    {
        public int UserId { get; set; }
        public int GameId { get; set; }
        public UserResponse User { get; set; }
        public GameResponse Game { get; set; }
    }
}
