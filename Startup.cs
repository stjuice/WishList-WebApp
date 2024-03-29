using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.SpaServices.ReactDevelopmentServer;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using HotChocolate;
using WishList.WebApp.GraphApi;
using WishList.WebApp.Services;
using WishList.WebApp.Entities;
using WishList.WebApp.Providers;
using System;
using WishList.WebApp.GraphApi.Types;
using WishList.WebApp.Settings.IdentityProvider;
using WishList.WebApp.Settings.DataAccess;

namespace WishList
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllersWithViews();

            // In production, the React files will be served from this directory
            services.AddSpaStaticFiles(configuration =>
            {
                configuration.RootPath = "ClientApp/build";
            });

            services.AddTransient<IdentityProviderConfig, GoogleIdentityPlatform>();
            services.AddTransient<DataAccessSettings, LocalDataAccessSettings>();

            services.AddTransient<WishListService, WishListService>();
            services.AddTransient<UserService, UserService>();

            services.AddTransient<DataProvider<WishItem, Guid>, LocalDataProvider<WishItem, Guid>>();
            services.AddTransient<DataProvider<User, Guid>, LocalDataProvider<User, Guid>>();

            services.AddGraphQLServer()
                .AddQueryType<QueryType>()
                .AddMutationType<MutationType>()
                .AddType<WishItemType>()
                .AddType<UserType>()
                .AddType<IdentityProviderConfigurationsType>()
                .AddType<PriceInfoType>(); 
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            app.UseHttpsRedirection();
            app.UseStaticFiles();
            app.UseSpaStaticFiles();

            app.UseRouting();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller}/{action=Index}/{id?}");

                endpoints.MapGraphQL();
            });

            app.UseSpa(spa =>
            {
                spa.Options.SourcePath = "ClientApp";

                if (env.IsDevelopment())
                {
                    spa.UseReactDevelopmentServer(npmScript: "start");
                }
            });
        }
    }
}
