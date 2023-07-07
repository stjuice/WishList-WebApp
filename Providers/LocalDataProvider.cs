using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;
using System;
using System.ComponentModel.DataAnnotations;
using System.IO;
using System.Threading.Tasks;

namespace WishList.WebApp.Providers;

public class LocalDataProvider<T> : JsonDataProvider<T>
{
    private readonly IConfiguration configuration;
    private readonly string pathToData = "DataPath:LocalWishListData";

    public LocalDataProvider(IConfiguration configuration)
    {
        this.configuration = configuration;
    }

    protected override Task WriteToFileAsync(T[] list)
    {
        throw new NotImplementedException();
    }

    protected override Task<string> GetDataAsync()
    {
        var path = GetPath();
        var jsonData = File.ReadAllText(path);
        return Task.FromResult(jsonData);
    }

    private string GetPath() 
        => configuration.GetValue<string>(pathToData);
}
