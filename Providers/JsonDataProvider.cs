using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WishList.WebApp.Entities;
using static HotChocolate.ErrorCodes;

namespace WishList.WebApp.Providers;

public abstract class JsonDataProvider<T, TId> : DataProvider<T, TId>
    where T : IIdentifiable<TId>, new()

{
    public override async Task<IEnumerable<T>> GetAllAsync()
    {
        var json = await GetDataAsync();
        var dataList = JsonConvert.DeserializeObject<IEnumerable<T>>(json);

        return dataList;
    }

    public override async Task<T> GetAsync(TId itemId)
    {
        var dataList = await GetAllAsync();
        var item = dataList.FirstOrDefault(data => data.Id.Equals(itemId));

        return item;
    }

    public override Task RemoveAllAsync()
    {
        throw new NotImplementedException();
    }

    public override Task RemoveAsync(TId id)
    {
        throw new NotImplementedException();
    }

    public override Task SaveAllAsync(T[] newEnity)
    {
        throw new NotImplementedException();
    }

    public override async Task SaveAsync(T entity)
    {
        var list = new List<T>(await GetAllAsync())
            {
                entity
            };

        await WriteToFileAsync(list.ToArray());
    }

    public override Task UpdateAsync(T entity)
    {
        throw new NotImplementedException();
    }

    abstract protected Task WriteToFileAsync(T[] list);

    abstract protected Task<string> GetDataAsync();
}
