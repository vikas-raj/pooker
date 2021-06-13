using System;
using System.Collections.Generic;
using System.Text;

namespace Pooker.Infrastructure.Data.Configuration
{
    using Microsoft.EntityFrameworkCore;
    using System;
    using System.Collections.Generic;
    using System.Text;
    public class DBContext : DbContext
    {
        public DBContext()
        {
            this.Database.SetConnectionString("PookerConnectionString");
        }
        public DBContext(DbContextOptions<DBContext> options)
            : base(options) { }
        //public DbSet<Entity> Entity { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

            modelBuilder.ApplyConfigurationsFromAssembly(this.GetType().Assembly);
        }
    }
}
