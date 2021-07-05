using System;
using System.Collections.Generic;
using System.Text;

namespace Pooker.DTO.Response
{
    public class UserResponse : EntityResponse
    {
        public string Username { get; set; }
        public string Email { get; set; }
    }
}
