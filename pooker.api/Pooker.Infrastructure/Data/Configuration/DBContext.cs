using System;
using System.Collections.Generic;
using System.Text;

namespace Pooker.Infrastructure.Data.Configuration
{
    using Microsoft.EntityFrameworkCore;
    using Pooker.Domain.Domain;
    using Pooker.Domain.Interface;
    using System.Linq;
    using System.Threading;
    using System.Threading.Tasks;

    public class DBContext : DbContext
    {
        public DBContext()
        {
            this.Database.SetConnectionString("PookerConnectionString");
        }
        public DBContext(DbContextOptions<DBContext> options)
            : base(options) { }

        public DbSet<User> User { get; set; }
        public DbSet<Game> Game { get; set; }
        public DbSet<GameBoard> GameBoard { get; set; }
        public DbSet<UserStoryDetail> UserStoryDetail { get; set; }
        public DbSet<GameUserXREF> GameUserXREF { get; set; }
        public DbSet<Card> Card { get; set; }
        public DbSet<CardType> CardType { get; set; }

        
        public virtual Task<int> SaveChangesAsync(string userId, CancellationToken cancellationToken = default)
        {
            if (string.IsNullOrEmpty(userId))
            {
                userId = Guid.Empty.ToString();
            }
            this.UpdateEntity(userId);
            return base.SaveChangesAsync(cancellationToken);
        }

        private void UpdateEntity(string userID)
        {
            IEnumerable<IAuditable> added = this.ChangeTracker.Entries<IAuditable>()
                .Where(e => e.State == EntityState.Added)
                .Select(e => e.Entity);

            IEnumerable<IAuditable> updated = this.ChangeTracker.Entries<IAuditable>()
                .Where(e => e.State == EntityState.Modified)
                .Select(e => e.Entity);
            DateTimeOffset now = DateTimeOffset.Now;

            string user = userID;

            foreach (var entity in added)
            {
                entity.CreatedOn = now;
                entity.UpdatedOn = now;
                entity.CreatedBy = user;
                entity.UpdatedBy = user;
            }

            foreach (var entity in updated)
            {
                entity.UpdatedOn = now;
                entity.UpdatedBy = user;
            }
        }
        
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            foreach (var entityType in modelBuilder.Model.GetEntityTypes().Where(e => typeof(Entity).IsAssignableFrom(e.ClrType)))
            {
                modelBuilder.Entity(entityType.ClrType)
                    .Property("Id")
                    .UseIdentityColumn();

                modelBuilder.Entity(entityType.ClrType)
                    .Property("CreatedBy");

                modelBuilder.Entity(entityType.ClrType)
                    .Property("CreatedOn");

                modelBuilder.Entity(entityType.ClrType)
                    .Property("UpdatedBy");

                modelBuilder.Entity(entityType.ClrType)
                    .Property("UpdatedOn");

                modelBuilder.Entity(entityType.ClrType)
                   .Property("IsDeleted")
                   .HasDefaultValue(false);
            }

            modelBuilder.ApplyConfigurationsFromAssembly(this.GetType().Assembly);
        }
    }
}
