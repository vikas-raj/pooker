using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Pooker.Domain.Domain
{
    public class UserStoryDetail : Entity
    {
        public UserStoryDetail()
        {
            this.GameBoards = new HashSet<GameBoard>();
        }
        public int? StoryPoint { get; set; }
        public string StoryName { get; set; }
        public int GameId { get; set; }
        public bool IsCurrentUserStory { get; set; }
        public bool IsUserStoryActive { get; set; }
        public virtual Game Game { get; set; }
        public virtual ICollection<GameBoard> GameBoards { get; set; }
    }
}
