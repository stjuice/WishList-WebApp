using HotChocolate;
using System;
using System.Threading.Tasks;
using WishList.Entities;
using WishList.WebApp.Entities;
using WishList.WebApp.GraphApi.Data;
using WishList.WebApp.GraphApi.Types;
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
