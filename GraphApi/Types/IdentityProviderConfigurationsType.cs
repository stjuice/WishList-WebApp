using HotChocolate.Types;

namespace WishList.WebApp.GraphApi.Types;

public class IdentityProviderConfigurationsType : ObjectType<IdentityProviderConfigurations>
{
    protected override void Configure(IObjectTypeDescriptor<IdentityProviderConfigurations> descriptor)
    {
        descriptor.Field(x => x.ClientId)
        .Type<NonNullType<StringType>>()
        .Name("clientId");
    }
}

public class IdentityProviderConfigurations
{
    public string ClientId { get; set; }
}
