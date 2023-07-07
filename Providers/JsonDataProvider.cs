using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using WishList.WebApp.Entities;
using static HotChocolate.ErrorCodes;

namespace WishList.WebApp.Providers;

public abstract class JsonDataProvider<T> : DataProvider<T>
{
    public override async Task<IEnumerable<T>> GetAllAsync()
    {
        var json = await GetDataAsync();
        var dataList = JsonConvert.DeserializeObject<IEnumerable<T>>(json);

        return dataList;
    }

    public override Task<T> GetAsync(Guid id)
    {
        throw new NotImplementedException();
    }

    public override Task RemoveAllAsync()
    {
        throw new NotImplementedException();
    }

    public override Task RemoveAsync(Guid id)
    {
        throw new NotImplementedException();
    }

    public override Task SaveAllAsync(T[] newEnity)
    {
        throw new NotImplementedException();
    }

    public override Task SaveAsync(T entity)
    {
        throw new NotImplementedException();
    }

    public override Task UpdateAsync(T entity)
    {
        throw new NotImplementedException();
    }

    abstract protected Task WriteToFileAsync(T[] list);

    abstract protected Task<string> GetDataAsync();
}
