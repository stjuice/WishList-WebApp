using Microsoft.Extensions.Configuration;
using System.Collections.Generic;
using System.Linq;
using WishList.Entities;
using Newtonsoft.Json;
using System.IO;
using WishList.WebApp.GraphApi.Data;

namespace WishList.GraphApi;
public class Query
{
    private readonly BookRepository bookRepository;

    public Query(BookRepository bookRepository)
    {
        this.bookRepository = bookRepository;
    }

    public Book GetBook(string id) 
        => bookRepository.GetBook(id);

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
