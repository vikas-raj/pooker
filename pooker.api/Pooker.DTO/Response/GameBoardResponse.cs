using System;
using System.Collections.Generic;
using System.Text;

namespace Pooker.DTO.Response
{
    public class GameBoardResponse : EntityResponse
    {
        public int? StoryPoint { get; set; }
        public int UserStoryDetailId { get; set; }
        public int UserId { get; set; }
        public UserResponse User { get; set; }
        public UserStoryDetailResponse UserStoryDetail { get; set; }
    }
}
