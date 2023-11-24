using Assignment.Core.Entity;
using Assignment.Core.Interface;
using Microsoft.AspNetCore.Mvc;

namespace CleanArchitectureDemo.Controllers;

[Route("api/[controller]")]
[ApiController]
public class UserController : ControllerBase
{
    private readonly IUserService _userService;

    public UserController(IUserService userService)
    {
        _userService = userService;
    }

    [HttpPost("signup")]
    public async Task<IActionResult> SignUp(User user)
    {
        var userId = await _userService.CreateUser(user);
        if (userId != -1)
        {
            return Ok($"User created with ID: {userId}");
        }
        else
        {
            return BadRequest("Invalid email");
        }
    }

    [HttpPost("login")]
    public async Task<IActionResult> Login(User user)
    {
        var userId = await _userService.AuthenticateUser(user.Email, user.Password);
        if (userId != -1)
        {
            return Ok($"User authenticated with ID: {userId}");
        }
        else
        {
            return Unauthorized("Invalid email or password");
        }
    }
}