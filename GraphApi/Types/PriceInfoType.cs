using HotChocolate.Types;
using WishList.WebApp.Entities;

namespace WishList.WebApp.GraphApi.Types;

internal class PriceInfoType : ObjectType<PriceInfo>
{
    protected override void Configure(IObjectTypeDescriptor<PriceInfo> descriptor)
    {
        descriptor.Field(t => t.Price)
            .Type<NonNullType<DecimalType>>()
            .Name("price");

        descriptor.Field(t => t.CurrencyId)
            .Type<NonNullType<StringType>>()
            .Name("currencyId");
    }
}