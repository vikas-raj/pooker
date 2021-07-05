using System;
using System.Collections.Generic;
using System.Text;

namespace Pooker.DTO.Request
{
    public class RegisterUserDto
    {
        public string Name { get; set; }
        public string Password { get; set; }
        public string Email { get; set; }
    }
}
