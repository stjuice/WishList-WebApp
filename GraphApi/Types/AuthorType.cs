using HotChocolate.Types;
using WishList.Entities;

namespace WishList.GraphApi.Types;
internal class AuthorType : ObjectType<Author>
{
    protected override void Configure(IObjectTypeDescriptor<Author> descriptor)
    {
        descriptor.Field(a => a.Id).Type<NonNullType<IntType>>();
        descriptor.Field(a => a.Name).Type<NonNullType<StringType>>();
    }
}
