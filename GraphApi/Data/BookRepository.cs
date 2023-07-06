using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using WishList.Entities;

namespace WishList.WebApp.GraphApi.Data;

public class BookRepository
{
    private readonly IConfiguration configuration;
    private readonly string pathToBooks = "DataPath:LocalBookListData";

    public BookRepository(IConfiguration configuration)
    {
        this.configuration = configuration;
    }

    public IEnumerable<Book> GetBooks() // TODO: Add Error handing
    {
        var path = configuration.GetValue<string>(pathToBooks);

        var json = File.ReadAllText(path);
        var books = JsonConvert.DeserializeObject<List<Book>>(json);

        return books;
    }

    public Book GetBook(string id)
    {
        var books = GetBooks();

        return books.FirstOrDefault(book => book.Id == id);
    }

    public async Task AddBook(Book book) // TODO: Add Error handing
    {
        var path = configuration.GetValue<string>(pathToBooks);
        var json = await File.ReadAllTextAsync(path);

        // Deserialize the JSON into a list of books
        List<Book> books = JsonConvert.DeserializeObject<List<Book>>(json);

        // Add the new book to the list
        books.Add(book);

        // Serialize the updated list back to JSON
        string updatedJson = JsonConvert.SerializeObject(books, Formatting.Indented);

        // Write the updated JSON back to the file
        await File.WriteAllTextAsync(path, updatedJson);
    }
}
