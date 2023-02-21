using Books.Data;
using Books.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Books
{
  public class BookStoreContext : IdentityDbContext<ApplicationUser>
  {
    public BookStoreContext(DbContextOptions<BookStoreContext> options)
        : base(options)
    {
    }

    public DbSet<Book> BooksTable { get; set; }
  }
}
