using System;
using System.Collections.Generic;
using System.Text;

namespace Pooker.DTO.Request
{
    public class UserStoryDto
    {
        public int? Id { get; set; }
        public int? StoryPoint { get; set; }
        public string StoryName { get; set; }
        public int GameId { get; set; }
        public bool IsUserStoryActive { get; set; }
    }
}
