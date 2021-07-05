using System;
using System.Collections.Generic;
using System.Text;

namespace Pooker.DTO.Response
{
    public class UserStoryDetailResponse : EntityResponse
    {
        public int? StoryPoint { get; set; }
        public string StoryName { get; set; }
        public bool IsCurrentUserStory { get; set; }
        public bool IsUserStoryActive { get; set; }
        public ICollection<GameBoardResponse> GameBoards { get; set; }
    }
}
