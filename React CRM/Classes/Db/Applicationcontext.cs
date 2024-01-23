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
                    new User { Id = new Guid(), Name = "Tom", Age = 37, Login = "Login", Password = "Password" },
                    new User { Id = new Guid(), Name = "Bob", Age = 41 },
                    new User { Id = new Guid(), Name = "Sam", Age = 24 }
            );
            /*modelBuilder.Entity<SysProfileData>().HasData(
                new SysProfileData { Id = new Guid(), Key = "AccountSectionGrid", ObjectData = "", User = Guid.Empty }
            );
            modelBuilder.Entity<Account>().HasData(
                new Account { Id = new Guid(), Name = "Our Company", Phone = "+78005553535", Code = "700" }
            );*/
        }
    }
}
