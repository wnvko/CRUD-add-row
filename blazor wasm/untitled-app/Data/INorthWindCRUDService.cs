namespace untitled_app.NorthWindCRUD
{
    public interface INorthWindCRUDService
    {
        Task<CategoryType?> PostCategory(object data);

        Task<CategoryType?> DeleteCategory(string id);

        Task<CategoryType?> PutCategory(object data);

        Task<List<CategoryType>?> GetCategory();
    }
}