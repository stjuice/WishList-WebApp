using HotChocolate.Types;
using WishList.WebApp.GraphApi.Types;

namespace WishList.WebApp.GraphApi;

public class MutationType : ObjectType<Mutation>
{
    protected override void Configure(IObjectTypeDescriptor<Mutation> descriptor)
    {
        descriptor.Field(m => m.AddNewWishItemAsync(default!, default!))
            .Type<WishItemType>()
            .Argument("wishItemInput", a => a.Type<NonNullType<WishItemInputType>>());
    }
}