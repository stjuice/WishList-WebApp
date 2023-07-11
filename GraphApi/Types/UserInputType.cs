using HotChocolate.Types;

namespace WishList.WebApp.GraphApi.Types;

public class UserInputType : InputObjectType<UserInput>
{
    protected override void Configure(IInputObjectTypeDescriptor<UserInput> descriptor)
    {
        descriptor.Name("UserInput");
        descriptor.Field(x => x.Name);
        descriptor.Field(x => x.Email);
    }
}

public class UserInput
{
    public string Name { get; set; }
    public string Email { get; set; }
}
