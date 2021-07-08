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

            builder.HasOne(d => d.CardType)
                .WithMany(a => a.Games)
                .HasForeignKey(d => d.CardTypeId)
                .HasConstraintName("FK_Game_CardType")
                    .OnDelete(DeleteBehavior.Restrict);
        }
    }
}
