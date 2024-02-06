using React_CRM.Classes.Db.Data.Interfaces;

namespace React_CRM.Controllers.Interfaces;

public interface IEntityManager
{
    public Entity Fetch(Guid id);
    public IEnumerable<Entity> GetEntities(IEntityManagerConfig config);
}

public interface IEntityManagerConfig
{
    public string EntityName { get; set; }
    public List<string> Collumns {get; set; }
    public List<string> Filters { get; set; }
    public List<string> Orders { get; set; }
    public int RecordsCount { get; set; }
    public int Offset { get; set; }
}
