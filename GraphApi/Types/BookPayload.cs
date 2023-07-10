using WishList.Entities;

namespace WishList.WebApp.GraphApi.Types;

public record BookPayload(Book record, string error = null)
{
    public string Id => record?.Id;
    public string Title => record?.Title;
    public string AuthorId => record?.AuthorId;
}
