using Microsoft.EntityFrameworkCore;
using reactnet_tutorial.Models;

namespace reactnet_tutorial.Data
{
    public class MyDBContext : DbContext
    {
        public MyDBContext(DbContextOptions<MyDBContext> options) : base(options) { }
        public DbSet<Note> Notes { get; set; }
        
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            var configuration = new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile("appsettings.Development.json")
                .Build();

            var connectionString = configuration.GetConnectionString("PSQLConnection");
            optionsBuilder.UseNpgsql(connectionString);
        }   
    }
}