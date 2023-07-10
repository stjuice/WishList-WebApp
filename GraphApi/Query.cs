using System.Collections.Generic;
using WishList.WebApp.Entities;
using WishList.WebApp.Services;
using System.Threading.Tasks;
using System;
using HotChocolate;

namespace WishList.GraphApi;
public class Query
{
    public async Task<IEnumerable<WishItem>> GetWishList([Service] WishListService wishListService) 
        => await wishListService.GetWishListAsync();

    public async Task<WishItem> GetWishItem([Service] WishListService wishListService, string id)
        => await wishListService.GetWishItemAsync(new Guid(id));
}
