using System;

namespace WishList.Entities;
public class Book
{
    public Book() { }
    public Book(string id, string title, string authorId)
    {
        Id = id;
        Title = title;
        AuthorId = authorId;
    }

    public string Id { get; set; }
    public string Title { get; set; }
    public string AuthorId { get; set; }
}