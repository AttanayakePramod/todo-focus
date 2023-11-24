using System.Security.Cryptography;
using System.Text;
using Assignment.Core.Entity;
using Assignment.Core.Interface;

namespace Assignment.Domain.Service;

public class UserService
{
    private readonly IDbService _dbService;

    public UserService(IDbService dbService)
    {
        _dbService = dbService;
    }
    
    public async Task<bool> IsEmailValid(string email)
    {
        try
        {
            var addr = new System.Net.Mail.MailAddress(email);
            return addr.Address == email;
        }
        catch
        {
            return false;
        }
    }

    public async Task<int> CreateUser(User user)
    {
        if (await IsEmailValid(user.Email))
        {
            var result = await _dbService.EditData(
                "INSERT INTO public.user (id,email,password) VALUES (@Id, @Email, @Password)",
                user
            );
            return result;
        }

        return -1; // Invalid email
    }

    public async Task<int> AuthenticateUser(string email, string password)
{
    var hashedPassword = HashPassword(password);

    var user = await _dbService.GetAsync<User>("SELECT * FROM public.user WHERE email = @Email", 
                                               new { Email = email });
    if (user == null)
    {
        return -1;
    }

    if (hashedPassword == HashPassword(user.Password))
    {
        return user.Id;
    }
    
    return  -1; // Return user ID if authentication is successful, otherwise -1
}


    private string HashPassword(string password)
    {
        using (SHA256 sha256 = SHA256.Create())
        {
            byte[] hashedBytes = sha256.ComputeHash(Encoding.UTF8.GetBytes(password));

            // Convert the byte array to a string
            StringBuilder builder = new StringBuilder();
            for (int i = 0; i < hashedBytes.Length; i++)
            {
                builder.Append(hashedBytes[i].ToString("x2"));
            }
            return builder.ToString();
        }
    }
}