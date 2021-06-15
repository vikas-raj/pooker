using System;
using System.Collections.Generic;
using System.Text;

namespace Pooker.Domain.Domain
{
    public class UserStoryDetail : Entity
    {
        public UserStoryDetail()
        {
            this.GameBoards = new HashSet<GameBoard>();
        }
        public int StoryPoint { get; set; }
        public string StoryName { get; set; }
        public int GameId { get; set; }
        public virtual Game Game { get; set; }
        public ICollection<GameBoard> GameBoards { get; set; }
    }
}
