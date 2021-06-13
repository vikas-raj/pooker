using System;
using System.Collections.Generic;
using System.Text;

namespace Pooker.Infrastructure.Data.Mapping
{
    using Microsoft.EntityFrameworkCore;
    using Microsoft.EntityFrameworkCore.Metadata.Builders;
    using Pooker.Domain.Domain;
    public class EntityMapping : IEntityTypeConfiguration<Entity>
    {
        public void Configure(EntityTypeBuilder<Entity> builder)
        {
            builder.ToTable("Entity");
            builder.Property(f => f.ID).HasColumnType("int").IsRequired().ValueGeneratedOnAdd();
            builder.Property(f => f.CreatedBy).HasColumnType("nvarchar(255)");
            builder.Property(f => f.CreatedOn).HasColumnType("datetimeoffset");
            builder.Property(f => f.UpdatedBy).HasColumnType("nvarchar(255)");
            builder.Property(f => f.UpdatedOn).HasColumnType("datetimeoffset");
        }
    }
}
