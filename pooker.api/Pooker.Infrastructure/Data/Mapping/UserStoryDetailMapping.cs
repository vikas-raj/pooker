namespace Pooker.Infrastructure.Data.Mapping
{
    using Microsoft.EntityFrameworkCore;
    using Microsoft.EntityFrameworkCore.Metadata.Builders;
    using Pooker.Domain.Domain;
    public class UserStoryDetailMapping : IEntityTypeConfiguration<UserStoryDetail>
    {
        public void Configure(EntityTypeBuilder<UserStoryDetail> builder)
        {
            builder.ToTable("UserStoryDetail");
            builder.Property(f => f.IsCurrentUserStory).HasColumnType("bit").HasDefaultValue(false);
            builder.Property(f => f.IsUserStoryActive).HasColumnType("bit").HasDefaultValue(false);

            builder.HasOne(d => d.Game)
                .WithMany(x => x.UserStoryDetails)
                .HasForeignKey(x => x.GameId)
                .HasConstraintName("FK_UserStoryDetail_Game");
        }
    }
}
