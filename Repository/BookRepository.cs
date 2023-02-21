using Books.Data;
using Books.Models;
using AutoMapper;
using Microsoft.AspNetCore.JsonPatch;
using Microsoft.EntityFrameworkCore;
namespace Books.Repository
{
  public class BookRepository : IBookRepository
  {
    private readonly BookStoreContext _context;
    private readonly IMapper _mapper;
    public BookRepository(BookStoreContext context, IMapper mapper)
    {
      _context = context;
      _mapper = mapper;
    }

    public async Task<List<BookModel>> GetAllBooksAsync()
    {
      var records = await _context.BooksTable.ToListAsync();
      return _mapper.Map<List<BookModel>>(records);

    }

    public async Task<BookModel> GetBookByIdAsync(int bookId)
    {
      //var records = await _context.Books.Where(x => x.Id == bookId).Select(x => new BookModel()
      //{
      //    Id = x.Id,
      //    Title = x.Title,
      //    Description = x.Description
      //}).FirstOrDefaultAsync();

      //return records;

      var book = await _context.BooksTable.FindAsync(bookId);
      return _mapper.Map<BookModel>(book);
    }

    public async Task<int> AddBookAsync(BookModel bookModel)
    {
      var newBook = new Book()
      {
        Title = bookModel.Title,
        Description = bookModel.Description
      };

      _context.BooksTable.Add(newBook);
      await _context.SaveChangesAsync();

      return newBook.Id;
    }

    public async Task UpdateBookAsync(int bookId, BookModel bookModel)
    {
      //var book = await _context.Books.FindAsync(bookId);
      //if (book != null)
      //{
      //    book.Title = bookModel.Title;
      //    book.Description = bookModel.Description;

      //    await _context.SaveChangesAsync();
      //}

      var book = new Book()
      {
        Id = bookId,
        Title = bookModel.Title,
        Description = bookModel.Description
      };

      _context.BooksTable.Update(book);
      await _context.SaveChangesAsync();
    }

    public async Task UpdateBookPatchAsync(int bookId, JsonPatchDocument bookModel)
    {
      var book = await _context.BooksTable.FindAsync(bookId);
      if (book != null)
      {
        bookModel.ApplyTo(book);
        await _context.SaveChangesAsync();
      }
    }

    public async Task DeleteBookAsync(int bookId)
    {
      var book = new Book() { Id = bookId };

      _context.BooksTable.Remove(book);

      await _context.SaveChangesAsync();
    }
  }
}
