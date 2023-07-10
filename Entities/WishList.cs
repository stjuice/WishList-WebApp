using System.Collections.Generic;

namespace WishList.WebApp.Entities;

public class WishList
{
    public List<WishItem> Items { get; set; }

    public WishList()
    {
        Items = new List<WishItem>();
    }

    public void AddItem(WishItem item)
    {
        Items.Add(item);
    }

    public void RemoveItem(WishItem item)
    {
        Items.Remove(item);
    }
}
