namespace Pooker.Infrastructure.Data.Mapping
{
    using Microsoft.EntityFrameworkCore;
    using Microsoft.EntityFrameworkCore.Metadata.Builders;
    using Pooker.Domain.Domain;
    public class CardMapping : IEntityTypeConfiguration<Card>
    {
        public void Configure(EntityTypeBuilder<Card> builder)
        {
            builder.ToTable("Card");

            builder.HasOne(d => d.CardType)
                .WithMany(a => a.Cards)
                .HasForeignKey(d => d.CardTypeId)
                .HasConstraintName("FK_Card_CardType")
                    .OnDelete(DeleteBehavior.Restrict);

        }
    }
}
