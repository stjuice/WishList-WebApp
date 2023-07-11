using HotChocolate;
using System;
using System.Threading.Tasks;
using WishList.WebApp.Entities;
using WishList.WebApp.GraphApi.Types;
using WishList.WebApp.Services;

namespace WishList.WebApp.GraphApi;

public class Mutation
{
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

    public async Task<User> AddNewUser([Service] UserService userService, UserInput userInput)
    {
        var user = new User()
        {
            Id = Guid.NewGuid(),
            Name = userInput.Name,
            Email = userInput.Email
        };

        await userService.AddNewUserAsync(user);
        return await userService.GetUserByEmailAsync(user.Email);
    }
}
