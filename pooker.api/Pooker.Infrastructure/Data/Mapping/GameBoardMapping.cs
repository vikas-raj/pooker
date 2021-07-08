using System;
using System.Collections.Generic;
using System.Text;

namespace Pooker.Infrastructure.Data.Mapping
{
    using Microsoft.EntityFrameworkCore;
    using Microsoft.EntityFrameworkCore.Metadata.Builders;
    using Pooker.Domain.Domain;
    public class GameBoardMapping : IEntityTypeConfiguration<GameBoard>
    {
        public void Configure(EntityTypeBuilder<GameBoard> builder)
        {
            builder.ToTable("GameBoard");
            builder.HasOne(d => d.User)
                .WithMany(a => a.GameBoards)
                .HasForeignKey(d => d.UserId)
                .HasConstraintName("FK_GameBoard_User")
                .OnDelete(DeleteBehavior.Restrict);

            builder.HasOne(d => d.UserStoryDetail)
                .WithMany(a => a.GameBoards)
                .HasForeignKey(d => d.UserStoryDetailId)
                .HasConstraintName("FK_GameBoard_UserStoryDetail");

            builder.HasOne(d => d.Card)
                .WithMany(a => a.GameBoards)
                .HasForeignKey(d => d.CardId)
                .HasConstraintName("FK_GameBoard_Card");
        }
    }
}
