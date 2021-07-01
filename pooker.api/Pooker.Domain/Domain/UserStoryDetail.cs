using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Pooker.Domain.Domain
{
    public class UserStoryDetail
    {
        public UserStoryDetail()
        {
            this.GameBoards = new HashSet<GameBoard>();
        }
        [Key]
        [DatabaseGeneratedAttribute(DatabaseGeneratedOption.Identity)]
        public int ID { get; set; }
        public int StoryPoint { get; set; }
        public string StoryName { get; set; }
        public int GameId { get; set; }
        public virtual Game Game { get; set; }
        public ICollection<GameBoard> GameBoards { get; set; }
    }
}
