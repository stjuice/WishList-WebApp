namespace WishList.WebApp.Entities;

public interface IIdentifiable<TId>
{
    TId Id { get; set; }
}

