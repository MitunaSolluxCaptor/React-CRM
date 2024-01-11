namespace React_CRM.Classes.Db.Data
{
    public class User
    {
        public int Id { get; set; }
        public string? Name { get; set; }
        public string? Login { get; set; }
        public string? Password { get; set; }
        public string? Hash { get; set; }
        public int Age { get; set; }
    }
}
