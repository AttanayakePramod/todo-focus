using Assignment.Core.Entity;

namespace Assignment.Core.Interface;

public interface IUserService
{
    Task<int> CreateUser(User user);

    Task<int> AuthenticateUser(string email, string password);
}