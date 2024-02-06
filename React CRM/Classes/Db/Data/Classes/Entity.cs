using React_CRM.Classes.Db.Data.Interfaces;

namespace React_CRM.Classes.Db.Data.Classes;

public class Entity : IEntity, IBaseObject
{
    public string Name { get; set; }
    public Dictionary<string, string> Data { get; set; }
    public Guid Id { get; set; }
    public DateTime CreatedOn { get; set; }
    public User CreatedBy { get; set; }
    public Guid CreatedById { get; set; }
    public DateTime ModifiedOn { get; set; }
    public User ModifiedBy { get; set; }
    public Guid ModifiedById { get; set; }

    public void Delete()
    {
    }

    public void Save()
    {
    }
}
