using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WishList.WebApp.Entities;
using WishList.WebApp.Providers;

namespace WishList.WebApp.Services;

public class UserService
{
    private readonly DataProvider<User, Guid> dataProvider;

    public UserService(DataProvider<User, Guid> dataProvider)
    {
        this.dataProvider = dataProvider;
    }

    public async Task<IEnumerable<User>> GetUserListAsync() 
        => await dataProvider.GetAllAsync();

    public async Task<User> GetUserByEmailAsync(string email)
    {
        var allUsers = await dataProvider.GetAllAsync();

        var user = allUsers.FirstOrDefault(user=>user.Email == email);
        return user;
    }

    internal async Task AddNewUserAsync(User item)
     => await dataProvider.SaveAsync(item);
}
