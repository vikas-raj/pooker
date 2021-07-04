namespace Pooker.Domain.Domain
{
    using Pooker.Domain.Interface;
    using System;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    public class Entity: IEntity<int>, IAuditable
    {
        [Key]
        [DatabaseGeneratedAttribute(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string CreatedBy { get; set; }
        public DateTimeOffset CreatedOn { get; set; }
        public string UpdatedBy { get; set; }
        public DateTimeOffset UpdatedOn { get; set; }
        public bool IsDeleted { get; set; }
    }
}
 