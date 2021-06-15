using System;
using System.Collections.Generic;
using System.Text;

namespace Pooker.Infrastructure.Data.Configuration
{
    using Microsoft.EntityFrameworkCore;
    using Pooker.Domain.Domain;
    using System.Linq;

    public class DBContext : DbContext
    {
        public DBContext()
        {
            this.Database.SetConnectionString("PookerConnectionString");
        }
        public DBContext(DbContextOptions<DBContext> options)
            : base(options) { }

        public DbSet<Entity> Entity { get; set; }
        public DbSet<User> User { get; set; }

        public DbSet<Game> Game { get; set; }
        public DbSet<GameBoard> GameBoard { get; set; }
        public DbSet<UserStoryDetail> UserStoryDetail { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            foreach (var entityType in modelBuilder.Model.GetEntityTypes().Where(e => typeof(Entity).IsInstanceOfType(e.ClrType)))
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
