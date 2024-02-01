namespace React_CRM.Classes.Db.Data
{
    public class Account
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public User? Owner { get; set; }
        public Guid? OwnerId { get; set; }
        public Guid? PrimaryContactId { get; set; }
        public Guid? Industry { get; set; }
        public string Code { get; set; }
        public Guid? Type { get; set; }
        public string Phone { get; set; }
        public string Address { get; set; }
        public Guid? CityId { get; set; }
        //public City? City { get; set; }
        public Guid? Region { get; set; }
        public Guid? Country { get; set; }
    }
}
