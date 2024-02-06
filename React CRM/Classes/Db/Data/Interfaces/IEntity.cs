namespace React_CRM.Classes.Db.Data.Interfaces
{
    public interface IEntity
    {
        public string Name { get; set; }
        public Dictionary<string, string> Data { get; set; }
        public void Save();
        public void Delete();
    }
}
