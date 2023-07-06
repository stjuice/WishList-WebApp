using HotChocolate.Types;
using WishList.Entities;

namespace WishList.GraphApi.Types;
public class BookType : ObjectType<Book>
{
    protected override void Configure(IObjectTypeDescriptor<Book> descriptor)
    {
        descriptor.Field(d => d.Id).Type<NonNullType<StringType>>();
        descriptor.Field(d => d.Title).Type<NonNullType<StringType>>();
        descriptor.Field(d => d.AuthorId).Type<NonNullType<StringType>>();
    }
}