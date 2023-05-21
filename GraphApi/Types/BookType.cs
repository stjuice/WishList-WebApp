using HotChocolate.Types;
using WishList.Entities;

namespace WishList.GraphApi.Types;
public class BookType : ObjectType<Book>
{
    protected override void Configure(IObjectTypeDescriptor<Book> descriptor)
    {
        descriptor.Field(b => b.Id).Type<NonNullType<StringType>>();
        descriptor.Field(b => b.Title).Type<NonNullType<StringType>>();
        descriptor.Field(b => b.AuthorId).Type<NonNullType<StringType>>();
    }
}