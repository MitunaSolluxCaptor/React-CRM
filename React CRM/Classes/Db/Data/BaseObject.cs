using React_CRM.Classes.Db.Data.Interfaces;

namespace React_CRM.Classes.Db.Data
{
    public class BaseObject: IBaseObject
    {
        public BaseObject() {
            Id = Guid.NewGuid();
            CreatedOn = DateTime.Now;
            ModifiedOn = DateTime.Now;
        }

        public Guid Id { get; set; }
        public DateTime CreatedOn { get; set; }
        public User CreatedBy { get; set; }
        public Guid CreatedById { get; set ; }
        public DateTime ModifiedOn { get; set; }
        public User ModifiedBy { get; set; }
        public Guid ModifiedById { get; set; }

        public void Delete()
        {
            throw new NotImplementedException();
        }

        public IBaseObject FetchEntity(Guid id)
        {
            throw new NotImplementedException();
        }

        public IBaseObject FetchEntity(Dictionary<string, object> condition)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<IBaseObject> GetEntitysCollection()
        {
            throw new NotImplementedException();
        }

        public void Save()
        {
            throw new NotImplementedException();
        }
    }
}
