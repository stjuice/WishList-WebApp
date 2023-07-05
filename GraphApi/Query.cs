using Microsoft.Extensions.Configuration;
using System.Collections.Generic;
using System.Linq;
using WishList.Entities;
using Newtonsoft.Json;
using System.IO;

namespace WishList.GraphApi;
public class Query
{
    private readonly IConfiguration configuration;

    public Query(IConfiguration configuration)
    {
        this.configuration = configuration;
    }

    public Book GetBook(string id)
    {
        var pathToBooks = configuration.GetValue<string>("DataPath:LocalBookListData");
        string json = File.ReadAllText(pathToBooks);
        List<Book> books = JsonConvert.DeserializeObject<List<Book>>(json);

        return books.FirstOrDefault(book => book.Id == id);
    }

    public Author GetAuthor(string id)
    {
        /* Retrieve author by id */
        var authors = new List<Author>
        {
            new Author { Id = "1", Name = "Author 1" },
            new Author { Id = "2", Name = "Author 2" },
            new Author { Id = "3", Name = "Author 3" }
        };

        return authors.FirstOrDefault(author => author.Id == id);
    }
}
