using HotChocolate.Types;
using WishList.WebApp.Entities;

namespace WishList.WebApp.GraphApi.Types;

internal class WishItemType : ObjectType<WishItem>
{
    protected override void Configure(IObjectTypeDescriptor<WishItem> descriptor)
    {
        descriptor.Field(t => t.Id)
            .Type<NonNullType<UuidType>>()
            .Name("id");

        descriptor.Field(t => t.Title)
            .Type<NonNullType<StringType>>()
            .Name("title");

        descriptor.Field(t => t.PriceInfo)
            .Type<PriceInfoType>()
            .Name("priceInfo");

        descriptor.Field(t => t.Link)
            .Type<NonNullType<StringType>>()
            .Name("link");

        descriptor.Field(t => t.AdditionalInfo)
            .Type<StringType>()
            .Name("additionalInfo");
    }
}