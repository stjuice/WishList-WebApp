using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace WishList.WebApp.Providers;

public abstract class DataProvider<T>
{
    public abstract Task<IEnumerable<T>> GetAllAsync();
    public abstract Task<T> GetAsync(Guid id);
    public abstract Task SaveAllAsync(T[] newEnity);
    public abstract Task SaveAsync(T entity);
    public abstract Task RemoveAllAsync();
    public abstract Task RemoveAsync(Guid id);
    public abstract Task UpdateAsync(T entity);
}
