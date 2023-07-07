using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using WishList.WebApp.Entities;
using WishList.WebApp.Providers;

namespace WishList.WebApp.Services;

public class WishListService
{
    private readonly DataProvider<WishItem> dataProvider;

    public WishListService(DataProvider<WishItem> dataProvider)
    {
        this.dataProvider = dataProvider;
    }

    public async Task<IEnumerable<WishItem>> GetWishListAsync() 
        => await dataProvider.GetAllAsync();
}
