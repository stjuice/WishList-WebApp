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
        /* Retrieve book by id */
        //var books = new List<Book>
        //{
        //    new Book { Id = "1", Title = "Book 1", AuthorId = "1" },
        //    new Book { Id = "2", Title = "Book 2", AuthorId = "2" },
        //    new Book { Id = "3", Title = "Book 3", AuthorId = "1" }
        //};

        //return books.FirstOrDefault(book => book.Id == id);

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
