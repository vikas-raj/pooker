using System;
using System.Collections.Generic;
using System.Text;

namespace Pooker.Domain.Domain
{
    public class Game : Entity
    {
        public Game()
        {
            this.UserStoryDetails = new HashSet<UserStoryDetail>();
        }
        public int Velocity { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public bool ShowVelocityToUser { get; set; }
        public int MeinGame { get; set; }
        public bool IsAutoFlip { get; set; }
        public bool AllowUserToChangeVote { get; set; }
        public int UserId { get; set; }
        public virtual User User { get; set; }
        public ICollection<UserStoryDetail> UserStoryDetails { get; set; }

    }
}
