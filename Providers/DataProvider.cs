using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using WishList.WebApp.Entities;

namespace WishList.WebApp.Providers;

public abstract class DataProvider<T, TId>
    where T : IIdentifiable<TId>, new()
{
    public abstract Task<IEnumerable<T>> GetAllAsync();
    public abstract Task<T> GetAsync(TId id);
    public abstract Task SaveAllAsync(T[] newEnity);
    public abstract Task SaveAsync(T entity);
    public abstract Task RemoveAllAsync();
    public abstract Task RemoveAsync(TId id);
    public abstract Task UpdateAsync(T entity);
}
