using HotChocolate.Types;
using WishList.WebApp.Entities;

namespace WishList.WebApp.GraphApi.Types;

public class UserType : ObjectType<User>
{
    protected override void Configure(IObjectTypeDescriptor<User> descriptor)
    {
        descriptor.Field(t => t.Id)
            .Type<NonNullType<UuidType>>()
            .Name("id");

        descriptor.Field(t => t.Name)
            .Type<NonNullType<StringType>>()
            .Name("name");

        descriptor.Field(t => t.Email)
            .Type<NonNullType<StringType>>()
            .Name("email");
    }
}
