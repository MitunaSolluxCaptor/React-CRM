namespace React_CRM.Classes.Db.Data
{
    public class Account
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public Guid? Owner { get; set; }
        public Guid? PrimaryContact { get; set; }
        public Guid? Industry { get; set; }
        public string Code { get; set; }
        public Guid? Type { get; set; }
        public string Phone { get; set; }
        public string Address { get; set; }
        public Guid? City { get; set; }
        public Guid? Region { get; set; }
        public Guid? Country { get; set; }
    }
}
