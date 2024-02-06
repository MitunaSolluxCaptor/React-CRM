using Microsoft.EntityFrameworkCore;
using React_CRM.Classes.Db.Data;
using System;

namespace React_CRM.Classes.Db
{
    public class ApplicationContext : DbContext
    {
        public DbSet<User> Users { get; set; } = null!;
        public ApplicationContext(DbContextOptions<ApplicationContext> options)
            : base(options)
        {
            Database.EnsureDeleted();
            Database.EnsureCreated();
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>().HasData(
                    new User { Id = Guid.Parse("410006e1-ca4e-4502-a9ec-e54d922d2c00"), Name = "Supervisor", Age = 37, Login = "Supervisor", Password = "Supervisor" },
                    new User { Id = Guid.NewGuid(), Name = "Bob", Age = 41 },
                    new User { Id = Guid.NewGuid(), Name = "Sam", Age = 24 }
            );
            /*modelBuilder.Entity<SysProfileData>().HasData(
                new SysProfileData { Id = Guid.NewGuid(), Key = "AccountSectionGrid", ObjectData = "", User = Guid.Empty }
            );*/
            /*modelBuilder.Entity<Account>().HasData(
                new Account { Id = Guid.NewGuid(), Name = "Our Company", Phone = "+78005553535", Code = "700", OwnerId = Guid.Parse("") }
            );*/
        }
    }
}
