using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;
using System;
using System.ComponentModel.DataAnnotations;
using System.IO;
using System.Threading.Tasks;
using WishList.WebApp.Entities;
using WishList.WebApp.Settings.DataAccess;

namespace WishList.WebApp.Providers;

public class LocalDataProvider<T, TId> : JsonDataProvider<T, TId>
    where T : IIdentifiable<TId>, new()
{
    private readonly IConfiguration configuration;
    private readonly DataAccessSettings _settings;

    public LocalDataProvider(IConfiguration configuration, DataAccessSettings settings)
    {
        this.configuration = configuration;
        _settings = settings;
    }

    protected override Task WriteToFileAsync(T[] list)
    {
        var path = GetPath();
        var convertedJson = JsonConvert.SerializeObject(list, Formatting.Indented);
        File.WriteAllText(path, convertedJson);
        return Task.CompletedTask;
    }

    protected override Task<string> GetDataAsync()
    {
        var path = GetPath();
        var jsonData = File.ReadAllText(path);
        return Task.FromResult(jsonData);
    }

    private string GetPath()
    {
        var pathToData = String.Concat(_settings.DataRootPath, typeof(T).Name);
        return configuration.GetValue<string>(pathToData);
    }
}
