using System.Collections.Generic;
using WishList.WebApp.Entities;
using WishList.WebApp.Services;
using System.Threading.Tasks;
using System;
using HotChocolate;
using HotChocolate.Types;
using WishList.WebApp.GraphApi.Types;
using WishList.WebApp.Settings.IdentityProvider;

namespace WishList.GraphApi;
public class Query
{
    public async Task<IEnumerable<WishItem>> GetWishList([Service] WishListService wishListService)
        => await wishListService.GetWishListAsync();

    public async Task<WishItem> GetWishItem([Service] WishListService wishListService, string id)
        => await wishListService.GetWishItemAsync(new Guid(id));

    public async Task<User> GetUserByEmail([Service] UserService userService, string email)
        => await userService.GetUserByEmailAsync(email);

    public IdentityProviderConfigurations GetIdentityProviderConfigurations([Service] IdentityProviderConfig identityProviderConfig)
    {
        var identityProviderConfiguration = new IdentityProviderConfigurations()
        {
            ClientId = identityProviderConfig.ClientId,
        };

        return identityProviderConfiguration;
    }
}
