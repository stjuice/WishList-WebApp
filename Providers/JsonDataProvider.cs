using System;
using System.Threading.Tasks;

namespace WishList.WebApp.Providers;

public abstract class JsonDataProvider<T> : DataProvider<T>
{
    public override Task<T[]> GetAllAsync()
    {
        throw new NotImplementedException();
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
