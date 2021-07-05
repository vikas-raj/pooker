using System;
using System.Collections.Generic;
using System.Text;

namespace Pooker.DTO.Request
{
    public class UserGameBoardDto
    {
        public int GameId { get; set; }
        public int UserId { get; set; }
        public int UserStoryDetailId { get; set; }
        public int? StoryPoint { get; set; }
    }
}
