namespace Respository
{
    using System;
    using System.Data.Entity;
    using System.Linq;

    public class Angular2SBModel : DbContext
    {
        // Your context has been configured to use a 'Angualr2SBModel' connection string from your application's 
        // configuration file (App.config or Web.config). By default, this connection string targets the 
        // 'Respository.Angualr2SBModel' database on your LocalDb instance. 
        // 
        // If you wish to target a different database and/or database provider, modify the 'Angualr2SBModel' 
        // connection string in the application configuration file.
        public Angular2SBModel()
            : base("name=Angular2SBModel")
        {
        }

        // Add a DbSet for each entity type that you want to include in your model. For more information 
        // on configuring and using a Code First model, see http://go.microsoft.com/fwlink/?LinkId=390109.

        // public virtual DbSet<MyEntity> MyEntities { get; set; }


        public DbSet<User> Users { get; set; }
        public DbSet<Interest> Interests { get; set; }


    }

    //public class MyEntity
    //{
    //    public int Id { get; set; }
    //    public string Name { get; set; }
    //}
}