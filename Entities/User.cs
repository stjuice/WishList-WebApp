using System;
using System.Collections.Generic;

namespace WishList.WebApp.Entities;

public class User : IIdentifiable<Guid>
{
    public Guid Id { get; set; }
    public string Name { get; set; }
    public string Email { get; set; }
    public IEnumerable<Guid> WishListsIds { get; set; }
}
