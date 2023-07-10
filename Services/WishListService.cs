using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using WishList.WebApp.Entities;
using WishList.WebApp.Providers;

namespace WishList.WebApp.Services;

public class WishListService
{
    private readonly DataProvider<WishItem, Guid> dataProvider;

    public WishListService(DataProvider<WishItem, Guid> dataProvider)
    {
        this.dataProvider = dataProvider;
    }

    public async Task<IEnumerable<WishItem>> GetWishListAsync() 
        => await dataProvider.GetAllAsync();

    internal async Task<WishItem> GetWishItemAsync(Guid id)
        => await dataProvider.GetAsync(id);

    internal async Task AddNewWishItemAsync(WishItem item)
        => await dataProvider.SaveAsync(item);
}
