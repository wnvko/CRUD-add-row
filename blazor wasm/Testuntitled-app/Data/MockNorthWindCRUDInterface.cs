namespace untitled_app.NorthWindCRUD
{
    public class MockNorthWindCRUDService : INorthWindCRUDService
    {
        public Task<CategoryType?> PostCategory(object data)
        {
            return Task.FromResult<CategoryType?>(new());
        }

        public Task<CategoryType?> DeleteCategory(string id)
        {
            return Task.FromResult<CategoryType?>(new());
        }

        public Task<CategoryType?> PutCategory(object data)
        {
            return Task.FromResult<CategoryType?>(new());
        }

        public Task<List<CategoryType>?> GetCategory()
        {
            return Task.FromResult<List<CategoryType>?>(new());
        }
    }
}