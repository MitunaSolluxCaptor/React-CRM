namespace React_CRM.Classes.Db.Data.Interfaces;

public interface IBaseObject
{
    public Guid Id { get; set; }
    public DateTime CreatedOn { get; set; }
    public User CreatedBy { get; set; }
    public Guid CreatedById { get; set; }
    public DateTime ModifiedOn { get; set; }
    public User ModifiedBy { get; set; }
    public Guid ModifiedById { get; set; }
    public IEnumerable<IBaseObject> GetEntitysCollection(/*ESQ?*/);
    public IBaseObject FetchEntity(Guid id);
    public IBaseObject FetchEntity(Dictionary<string, object> condition);
    public void Save();
    public void Delete();
}
