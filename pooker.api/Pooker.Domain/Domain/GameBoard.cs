namespace Pooker.Domain.Domain
{
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    public class GameBoard
    {
        [Key]
        [DatabaseGeneratedAttribute(DatabaseGeneratedOption.Identity)]
        public int ID { get; set; }
        public int storyPoint { get; set; }
        public int UserStoryDetailId { get; set; }
        public int UserId { get; set; }
        public virtual User User { get; set; }
        public virtual UserStoryDetail UserStoryDetail { get; set; }
    }
}
