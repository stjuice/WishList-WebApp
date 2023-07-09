using Microsoft.Extensions.Configuration;
using System.Collections.Generic;
using System.Linq;
using WishList.Entities;
using Newtonsoft.Json;
using System.IO;
using WishList.WebApp.GraphApi.Data;
using WishList.WebApp.Entities;
using WishList.WebApp.Services;
using System.Threading.Tasks;
using System;

namespace WishList.GraphApi;
public class Query
{
    private readonly BookRepository bookRepository;
    private readonly WishListService wishListService;

    public Query(BookRepository bookRepository, WishListService wishListService)
    {
        this.bookRepository = bookRepository;
        this.wishListService = wishListService;
    }

    public async Task<IEnumerable<WishItem>> GetWishList() 
        => await wishListService.GetWishListAsync();

    public async Task<WishItem> GetWishItem(string id)
        => await wishListService.GetWishItemAsync(new Guid(id));

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
