using System;
using System.Collections.Generic;
using System.Text;

namespace Pooker.Infrastructure.Data.Mapping
{
    using Microsoft.EntityFrameworkCore;
    using Microsoft.EntityFrameworkCore.Metadata.Builders;
    using Pooker.Domain.Domain;
    public class GameUserXREFMapping : IEntityTypeConfiguration<GameUserXREF>
    {
        public void Configure(EntityTypeBuilder<GameUserXREF> builder)
        {
            builder.ToTable("GameUserXREF");

            builder.HasOne(d => d.User)
                .WithMany(a => a.GameUserXREFs)
                .HasForeignKey(d => d.UserId)
                .HasConstraintName("FK_Gameser_User_XREF")
                    .OnDelete(DeleteBehavior.Restrict);

            builder.HasOne(d => d.Game)
                .WithMany(a => a.GameUserXREFs)
                .HasForeignKey(d => d.GameId)
                .HasConstraintName("FK_GameUser_Game_XREF")
                    .OnDelete(DeleteBehavior.Restrict);
        }

    }
}
