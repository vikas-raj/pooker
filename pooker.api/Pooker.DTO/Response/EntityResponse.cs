using System;
using System.Collections.Generic;
using System.Text;

namespace Pooker.DTO.Response
{
    public class EntityResponse
    {
        public int Id { get; set; }
        public string CreatedBy { get; set; }
        public DateTimeOffset CreatedOn { get; set; }
        public string UpdatedBy { get; set; }
        public DateTimeOffset UpdatedOn { get; set; }
        public bool IsDeleted { get; set; }
    }
}
