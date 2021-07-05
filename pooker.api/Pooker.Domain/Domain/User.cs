using System;
using System.Collections.Generic;
using System.Text;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace Pooker.Domain.Domain
{
    public class User : Entity
    { 
        public User()
        {
            this.GameBoards = new HashSet<GameBoard>();
            this.Games = new HashSet<Game>();
            this.GameUserXREFs = new HashSet<GameUserXREF>();
        }
        public string Username { get; set; }
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }
        public string Email { get; set; }
        public virtual ICollection<GameBoard> GameBoards { get; set; }
        public virtual ICollection<Game> Games { get; set; }
        public virtual ICollection<GameUserXREF> GameUserXREFs { get; set; }
    }
}
