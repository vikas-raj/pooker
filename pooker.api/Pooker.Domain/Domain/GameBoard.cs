namespace Pooker.Domain.Domain
{
    public class GameBoard : Entity
    {
        public int UserId { get; set; }
        public int UserStoryDetailId { get; set; }
        public int CardId { get; set; }
        public virtual User User { get; set; }
        public virtual UserStoryDetail UserStoryDetail { get; set; }
        public virtual Card Card { get; set; }
    }
}
