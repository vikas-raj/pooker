namespace Pooker.DTO.Request
{
    public class GameRequest
    {
        public string Name { get; set; }
        public int Velocity { get; set; }
        public string Description { get; set; }
        public bool ShowVelocityToUser { get; set; }
        public bool MeinGame { get; set; }
        public bool IsAutoFlip { get; set; }
        public bool AllowUserToChangeVote { get; set; }
        public int UserId { get; set; }
    }
}
