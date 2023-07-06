using HotChocolate;
using System;
using System.Linq;
using System.Threading.Tasks;
using WishList.Entities;
using WishList.WebApp.GraphApi.Data;

namespace WishList.WebApp.GraphApi;

public class Mutation
{
    public async Task<BookPayload> AddBook(BookInput input, [Service] BookRepository repository)
    {
        var book = new Book(Guid.NewGuid().ToString(), input.title, input.authorId);
        await repository.AddBook(book);

        return new BookPayload(book);
    }
}

public record BookPayload(Book? record, string? error = null)
{
    public string Id => record?.Id;
    public string Title => record?.Title;
    public string AuthorId => record?.AuthorId;
}

public record BookInput(string title, string authorId);