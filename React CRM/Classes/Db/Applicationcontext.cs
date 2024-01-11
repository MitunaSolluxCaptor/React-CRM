using Microsoft.EntityFrameworkCore;
using React_CRM.Classes.Db.Data;

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
                    new User { Id = 1, Name = "Tom", Age = 37, Login = "Login", Password = "Password" },
                    new User { Id = 2, Name = "Bob", Age = 41 },
                    new User { Id = 3, Name = "Sam", Age = 24 }
            );
        }
    }
}
