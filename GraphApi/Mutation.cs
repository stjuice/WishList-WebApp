using HotChocolate;
using System;
using System.Linq;
using System.Threading.Tasks;
using WishList.Entities;
using WishList.WebApp.Entities;
using WishList.WebApp.GraphApi.Data;
using WishList.WebApp.Services;

namespace WishList.WebApp.GraphApi;

public class Mutation
{
    public async Task<BookPayload> AddBook(BookInput input, [Service] BookRepository repository)
    {
        var book = new Book(Guid.NewGuid().ToString(), input.title, input.authorId);
        await repository.AddBook(book);

        return new BookPayload(book);
    }

    public async Task<WishItem> AddNewWishItemAsync(WishItemInput wishItemInput, [Service] WishListService wishListService)
    {
        var wishItem = new WishItem()
        {
            Id = Guid.NewGuid(),
            Title = wishItemInput.Title,
            PriceInfo = wishItemInput.PriceInfo,
            Link = wishItemInput.Link,
            AdditionalInfo = wishItemInput.AdditionalInfo,
        };

        await wishListService.AddNewWishItemAsync(wishItem);
        return await wishListService.GetWishItemAsync(wishItem.Id);
    }
}

public class WishItemInput
{
    public string Title { get; set; }
    public PriceInfo PriceInfo { get; set; }
    public string Link { get; set; }
    public string AdditionalInfo { get; set; }
}

public record BookPayload(Book? record, string? error = null)
{
    public string Id => record?.Id;
    public string Title => record?.Title;
    public string AuthorId => record?.AuthorId;
}

public record BookInput(string title, string authorId);