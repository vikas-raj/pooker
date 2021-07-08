namespace Pooker.Infrastructure.Data.Mapping
{
    using Microsoft.EntityFrameworkCore;
    using Microsoft.EntityFrameworkCore.Metadata.Builders;
    using Pooker.Domain.Domain;
    public class CardTypeMapping : IEntityTypeConfiguration<CardType>
    {
        public void Configure(EntityTypeBuilder<CardType> builder)
        { 
            builder.ToTable("CardType");
        }
    }
}
