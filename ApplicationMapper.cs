using AutoMapper;
using Books.Data;
using Books.Models;
namespace BookStore.API.Helpers
{
  public class ApplicationMapper : Profile
  {
    public ApplicationMapper()
    {
      CreateMap<Book, BookModel>().ReverseMap();
    }
  }
}
