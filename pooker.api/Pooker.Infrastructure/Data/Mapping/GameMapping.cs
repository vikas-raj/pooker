using System;
using System.Collections.Generic;
using System.Text;

namespace Pooker.Infrastructure.Data.Mapping
{
    using Microsoft.EntityFrameworkCore;
    using Microsoft.EntityFrameworkCore.Metadata.Builders;
    using Pooker.Domain.Domain;
    public class GameMapping : IEntityTypeConfiguration<Game>
    {
        public void Configure(EntityTypeBuilder<Game> builder)
        {
            builder.ToTable("Game");

            builder.HasOne(d => d.User)
                .WithMany(a => a.Games)
                .HasForeignKey(d => d.UserId)
                .HasConstraintName("FK_Game_User")
                    .OnDelete(DeleteBehavior.Restrict);
        }
    }
}
