using System;
using System.Collections.Generic;
using System.Text;

namespace Pooker.Domain.Domain
{
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    public class GameUserXREF : Entity
    {
        public int UserId { get; set; }
        public int GameId { get; set; }
        public virtual User User { get; set; }
        public virtual Game Game { get; set; }
    }
}
