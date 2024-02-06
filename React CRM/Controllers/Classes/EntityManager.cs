using React_CRM.Classes.Db;
using React_CRM.Classes.Db.Data.Classes;
using React_CRM.Classes.Db.Data.Interfaces;
using React_CRM.Controllers.Interfaces;

namespace React_CRM.Controllers.Classes;

public class EntityManager: IEntityManager
{
    private ApplicationContext _db;
    public EntityManager(ApplicationContext context) {
        _db = context;
    }

    public Entity Fetch(string entityName, Guid id)
    {
        
        return new Entity();        
    }

    public IEnumerable<Entity> GetEntities(IEntityManagerConfig config)
    {
        
    }
}

public class EntityManagerConfig : IEntityManagerConfig
{
    public string EntityName { get; set; }
    public List<string> Collumns { get; set; }
    public List<string> Filters { get; set; }
    public List<string> Orders { get; set; }
    public int RecordsCount { get; set; }
    public int Offset { get; set; }
}