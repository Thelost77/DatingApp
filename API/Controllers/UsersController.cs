﻿using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers;

public class UsersController(DataContext context) : BaseController
{
    private readonly DataContext _context = context;

    [HttpGet]
    public async Task<ActionResult<IEnumerable<AppUser>>> GetUsers()
    {
        return await _context.Users.ToListAsync();
    }

    [HttpGet]
    [Route("{id}")]
    public async Task<ActionResult<AppUser>> GetUser(int id)
    {
        return await _context.Users.FindAsync(id);
    }
}
