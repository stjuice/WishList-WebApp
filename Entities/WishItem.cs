using System;

namespace WishList.WebApp.Entities;

public class WishItem
{
    public Guid Id { get; set; }
    public string Title { get; set; }
    public PriceInfo PriceInfo { get; set; }
    public string Link { get; set; }
    public string AdditionalInfo { get; set; }
}

public class PriceInfo
{
    public decimal Price { get; set; }
    public string CurrencyId { get; set; }
}