using System;
using System.Collections.Generic;
using System.Text;

namespace Pooker.Domain.Domain
{
    public class Card : Entity
    {
        public Card()
        {
            this.GameBoards = new HashSet<GameBoard>();
        }
        public string Value { get; set; }
        public int CardTypeId { get; set; }
        public virtual CardType CardType { get; set; }
        public virtual ICollection<GameBoard> GameBoards { get; set; }
    }
}
