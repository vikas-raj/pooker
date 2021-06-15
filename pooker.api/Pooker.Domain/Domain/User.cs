using System;
using System.Collections.Generic;
using System.Text;

namespace Pooker.Domain.Domain
{
    public class User : Entity
    {
        public User()
        {
            this.GameBoards = new HashSet<GameBoard>();
            this.Games = new HashSet<Game>();
        }
        public string Username { get; set; }
        public string Password { get; set; }
        public string Email { get; set; }
        public ICollection<GameBoard> GameBoards { get; set; }
        public ICollection<Game> Games { get; set; }

    }
}
