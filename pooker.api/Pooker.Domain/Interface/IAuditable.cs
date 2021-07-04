using System;
using System.Collections.Generic;
using System.Text;

namespace Pooker.Domain.Interface
{
    public interface IAuditable
    {
        DateTimeOffset CreatedOn { get; set; }
        DateTimeOffset UpdatedOn { get; set; }
        string CreatedBy { get; set; }
        string UpdatedBy { get; set; }
    }
}
