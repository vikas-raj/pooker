using System;
using System.Collections.Generic;
using System.Text;

namespace Pooker.Domain.Domain
{
    public class CardType : Entity
    {
        public CardType()
        {
            this.Cards = new HashSet<Card>();
            this.Games = new HashSet<Game>();
        }
        public string Name { get; set; }
        public virtual ICollection<Card> Cards { get; set; }
        public virtual ICollection<Game> Games { get; set; }
    }
}
