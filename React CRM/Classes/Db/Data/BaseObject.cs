using React_CRM.Classes.Db.Data.Interfaces;

namespace React_CRM.Classes.Db.Data
{
    public class BaseObject: IBaseObject
    {
        public BaseObject() {
            Id = Guid.NewGuid();
            CreatedOn = DateTime.Now;
            CreatedById = Guid.Parse("410006e1-ca4e-4502-a9ec-e54d922d2c00");
            ModifiedOn = DateTime.Now;
            ModifiedById = Guid.Parse("410006e1-ca4e-4502-a9ec-e54d922d2c00");
        }

        public Guid Id { get; set; }
        public DateTime CreatedOn { get; set; }
        public User CreatedBy { get; set; }
        public Guid CreatedById { get; set ; }
        public DateTime ModifiedOn { get; set; }
        public User ModifiedBy { get; set; }
        public Guid ModifiedById { get; set; }
    }
}
