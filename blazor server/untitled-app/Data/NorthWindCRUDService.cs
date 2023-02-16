using System.Net.Http.Json;

namespace untitled_app.NorthWindCRUD
{
    public class NorthWindCRUDService: INorthWindCRUDService
    {
        private readonly HttpClient _http;

        public NorthWindCRUDService(HttpClient http)
        {
            this._http = http;
        }

        public async Task<CategoryType?> PostCategory(object data)
        {
            using HttpRequestMessage request = new HttpRequestMessage(HttpMethod.Post, new Uri("https://data-northwind.indigo.design/Category", UriKind.RelativeOrAbsolute));
            request.Headers.Add("Authorization", "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJJZCI6IjA1ZDI4ZGQ2LWQzYWItNGM2Yi1hYWJiLWE4YmU3YTMxOTFhMyIsInN1YiI6ImdtYXJ0aW5lekBpbmZyYWdpc3RpY3MuY29tIiwiZW1haWwiOiJnbWFydGluZXpAaW5mcmFnaXN0aWNzLmNvbSIsImp0aSI6IjdhNjczMzJlLTI1ZDktNGU3NS1hNzM3LTU1MTdjOWFkMjkxOSIsIm5iZiI6MTY2ODcwOTExMywiZXhwIjoxNjY4NzA5NDEzLCJpYXQiOjE2Njg3MDkxMTMsImlzcyI6Imh0dHBzOi8vbG9jYWxob3N0OjcyNDQvIiwiYXVkIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NzI0NC8ifQ.sVRzZCh2ao-SGflByPxsDGdEFstAB17KKHaPdv9vxDDIpr3b1NY4G9LpU1eX4aCvDZbAX6finGSblfda2mcwpw");
            request.Content = new StringContent(@"{
  ""categoryId"": 123,
  ""description"": ""string"",
  ""name"": ""string""
}", System.Text.Encoding.UTF8, "application/json");
            request.Content = JsonContent.Create(data);
            using HttpResponseMessage response = await this._http.SendAsync(request).ConfigureAwait(false);
            if (response.IsSuccessStatusCode)
            {
                return await response.Content.ReadFromJsonAsync<CategoryType>().ConfigureAwait(false);
            }

            return null;
        }

        public async Task<CategoryType?> DeleteCategory(string id)
        {
            using HttpRequestMessage request = new HttpRequestMessage(HttpMethod.Delete, new Uri($"https://data-northwind.indigo.design/Category/{id}", UriKind.RelativeOrAbsolute));
            request.Headers.Add("Authorization", "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJJZCI6IjA1ZDI4ZGQ2LWQzYWItNGM2Yi1hYWJiLWE4YmU3YTMxOTFhMyIsInN1YiI6ImdtYXJ0aW5lekBpbmZyYWdpc3RpY3MuY29tIiwiZW1haWwiOiJnbWFydGluZXpAaW5mcmFnaXN0aWNzLmNvbSIsImp0aSI6IjdhNjczMzJlLTI1ZDktNGU3NS1hNzM3LTU1MTdjOWFkMjkxOSIsIm5iZiI6MTY2ODcwOTExMywiZXhwIjoxNjY4NzA5NDEzLCJpYXQiOjE2Njg3MDkxMTMsImlzcyI6Imh0dHBzOi8vbG9jYWxob3N0OjcyNDQvIiwiYXVkIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NzI0NC8ifQ.sVRzZCh2ao-SGflByPxsDGdEFstAB17KKHaPdv9vxDDIpr3b1NY4G9LpU1eX4aCvDZbAX6finGSblfda2mcwpw");
            using HttpResponseMessage response = await this._http.SendAsync(request).ConfigureAwait(false);
            if (response.IsSuccessStatusCode)
            {
                return await response.Content.ReadFromJsonAsync<CategoryType>().ConfigureAwait(false);
            }

            return null;
        }

        public async Task<CategoryType?> PutCategory(object data)
        {
            using HttpRequestMessage request = new HttpRequestMessage(HttpMethod.Put, new Uri("https://data-northwind.indigo.design/Category", UriKind.RelativeOrAbsolute));
            request.Headers.Add("Authorization", "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJJZCI6IjA1ZDI4ZGQ2LWQzYWItNGM2Yi1hYWJiLWE4YmU3YTMxOTFhMyIsInN1YiI6ImdtYXJ0aW5lekBpbmZyYWdpc3RpY3MuY29tIiwiZW1haWwiOiJnbWFydGluZXpAaW5mcmFnaXN0aWNzLmNvbSIsImp0aSI6IjdhNjczMzJlLTI1ZDktNGU3NS1hNzM3LTU1MTdjOWFkMjkxOSIsIm5iZiI6MTY2ODcwOTExMywiZXhwIjoxNjY4NzA5NDEzLCJpYXQiOjE2Njg3MDkxMTMsImlzcyI6Imh0dHBzOi8vbG9jYWxob3N0OjcyNDQvIiwiYXVkIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NzI0NC8ifQ.sVRzZCh2ao-SGflByPxsDGdEFstAB17KKHaPdv9vxDDIpr3b1NY4G9LpU1eX4aCvDZbAX6finGSblfda2mcwpw");
            request.Content = new StringContent(@"{
  ""categoryId"": 123,
  ""description"": ""string"",
  ""name"": ""string""
}", System.Text.Encoding.UTF8, "application/json");
            request.Content = JsonContent.Create(data);
            using HttpResponseMessage response = await this._http.SendAsync(request).ConfigureAwait(false);
            if (response.IsSuccessStatusCode)
            {
                return await response.Content.ReadFromJsonAsync<CategoryType>().ConfigureAwait(false);
            }

            return null;
        }

        public async Task<List<CategoryType>?> GetCategory()
        {
            using HttpRequestMessage request = new HttpRequestMessage(HttpMethod.Get, new Uri("https://data-northwind.indigo.design/Category", UriKind.RelativeOrAbsolute));
            request.Headers.Add("Authorization", "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJJZCI6IjA1ZDI4ZGQ2LWQzYWItNGM2Yi1hYWJiLWE4YmU3YTMxOTFhMyIsInN1YiI6ImdtYXJ0aW5lekBpbmZyYWdpc3RpY3MuY29tIiwiZW1haWwiOiJnbWFydGluZXpAaW5mcmFnaXN0aWNzLmNvbSIsImp0aSI6IjdhNjczMzJlLTI1ZDktNGU3NS1hNzM3LTU1MTdjOWFkMjkxOSIsIm5iZiI6MTY2ODcwOTExMywiZXhwIjoxNjY4NzA5NDEzLCJpYXQiOjE2Njg3MDkxMTMsImlzcyI6Imh0dHBzOi8vbG9jYWxob3N0OjcyNDQvIiwiYXVkIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NzI0NC8ifQ.sVRzZCh2ao-SGflByPxsDGdEFstAB17KKHaPdv9vxDDIpr3b1NY4G9LpU1eX4aCvDZbAX6finGSblfda2mcwpw");
            using HttpResponseMessage response = await this._http.SendAsync(request).ConfigureAwait(false);
            if (response.IsSuccessStatusCode)
            {
                return await response.Content.ReadFromJsonAsync<List<CategoryType>>().ConfigureAwait(false);
            }

            return null;
        }
    }
}