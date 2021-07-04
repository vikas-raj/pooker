using System;
using System.Collections.Generic;
using System.Text;

namespace Pooker.Domain.Interface
{
    public interface IEntity<Tid>
    {
        Tid Id { get; set; }
        public DateTimeOffset CreatedOn { get; set; }
        public DateTimeOffset UpdatedOn { get; set; }
        public string CreatedBy { get; set; }
        public string UpdatedBy { get; set; }
        public bool IsDeleted { get; set; }
    }
}
