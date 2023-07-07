using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations;
using System.IO;
using System.Threading.Tasks;

namespace WishList.WebApp.Providers;

public class LocalDataProvider<T> : JsonDataProvider<T>
{
    private readonly IConfiguration configuration;
    private readonly string pathToData = "DataPath";

    public LocalDataProvider(IConfiguration configuration)
    {
        this.configuration = configuration;
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

        var type = typeof(T).Name;
        var path = configuration.GetValue<string>($"{pathToData} : {type}");
        return path;
    }
}
