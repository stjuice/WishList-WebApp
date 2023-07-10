using HotChocolate.Types;
using WishList.WebApp.Entities;

namespace WishList.WebApp.GraphApi.Types;

public class WishItemInputType : InputObjectType<WishItemInput>
{
    protected override void Configure(IInputObjectTypeDescriptor<WishItemInput> descriptor)
    {
        descriptor.Name("WishItemInput");
        descriptor.Field(x => x.Title);
        descriptor.Field(x => x.PriceInfo);
        descriptor.Field(x => x.Link);
        descriptor.Field(x => x.AdditionalInfo)
            .Type<StringType>();
    }
}

public class WishItemInput
{
    public string Title { get; set; }
    public PriceInfo PriceInfo { get; set; }
    public string Link { get; set; }
    public string AdditionalInfo { get; set; }
}
