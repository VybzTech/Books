using Books.Models;
using Microsoft.AspNetCore.Identity;

namespace Books.Repository
{
  public interface IAccountRepository
  {
    Task<IdentityResult> SignUpAsync(SignUpModel signUpModel);
    Task<string> LoginAsync(SignInModel signInModel);
  }
}
