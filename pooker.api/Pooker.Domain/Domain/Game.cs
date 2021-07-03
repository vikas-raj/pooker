using System;
using System.Collections.Generic;
using System.Text;

namespace Pooker.Domain.Domain
{
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    public class Game
    {
        public Game()
        {
            this.UserStoryDetails = new HashSet<UserStoryDetail>();
        }
        [Key]
        [DatabaseGeneratedAttribute(DatabaseGeneratedOption.Identity)]
        public int ID { get; set; }
        public string Guid { get; set; }
        public int Velocity { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public bool ShowVelocityToUser { get; set; }
        public bool MeInGame { get; set; }
        public bool IsAutoFlip { get; set; }
        public bool AllowUserToChangeVote { get; set; }
        public int UserId { get; set; }
        public virtual User User { get; set; }
        public virtual ICollection<UserStoryDetail> UserStoryDetails { get; set; }
    }
}
