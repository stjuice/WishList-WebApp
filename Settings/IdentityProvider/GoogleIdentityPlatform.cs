using Microsoft.Extensions.Configuration;

namespace WishList.WebApp.Settings.IdentityProvider
{
    public class GoogleIdentityPlatform : IdentityProviderConfig
    {
        private readonly IConfiguration configuration;

        public GoogleIdentityPlatform(IConfiguration configuration)
        {
            this.configuration = configuration;
        }

        public override string ClientId => configuration.GetValue<string>("IdentityProviderConfig:GoogleIdentityPlatform:clientId");
    }
}
