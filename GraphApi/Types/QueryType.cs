using HotChocolate.Types;
using WishList.GraphApi;
using WishList.GraphApi.Types;

namespace WishList.WebApp.GraphApi.Types;

public class QueryType : ObjectType<Query>
{
    protected override void Configure(IObjectTypeDescriptor<Query> descriptor)
    {
        descriptor.Field(t => t.GetWishList(default))
            .Type<ListType<WishItemType>>()
            .Name("wishList");

        descriptor.Field(t => t.GetWishItem(default, default))
            .Type<WishItemType>()
            .Name("wishItem")
            .Argument("id", arg => arg.Type<NonNullType<StringType>>());

        descriptor.Field(t => t.GetBook(default))
            .Type<BookType>()
            .Name("book")
            .Argument("id", arg => arg.Type<NonNullType<IdType>>());

        descriptor.Field(t => t.GetAuthor(default))
            .Type<AuthorType>()
            .Name("author")
            .Argument("id", arg => arg.Type<NonNullType<IdType>>());
    }
}
