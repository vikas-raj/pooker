using System;
using System.Collections.Generic;
using System.Text;

namespace Pooker.Infrastructure.Query
{
    using Microsoft.EntityFrameworkCore;
    using Pooker.Domain.Domain;
    using Pooker.DTO.Request;
    using Pooker.Infrastructure.Data.Configuration;
    using System.Linq;
    using System.Threading.Tasks;
    public class LoginUserQuery : QueryAsync<User, DBContext>
    {
        private readonly LoginUserDto loginUserDto = null;

        public LoginUserQuery(LoginUserDto loginUserDto)
        {
            this.loginUserDto = loginUserDto;
        }
        public override async Task<User> ExecuteAsync(DBContext dbContext)
        {
            var user = dbContext.User.AsNoTracking()
                            .FirstOrDefault(x => x.Email.ToLower() == this.loginUserDto.Email.ToLower());
            if (user == null)
                return null;

            if (!VerifyPasswordHash(this.loginUserDto.Password, user.PasswordHash, user.PasswordSalt))
                return null;

            return user;
        }

        private bool VerifyPasswordHash(string password, byte[] passwordHash, byte[] passwordSalt)
        {
            using (var hmac = new System.Security.Cryptography.HMACSHA512(passwordSalt))
            {
                var computedHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
                for (int i = 0; i < computedHash.Length; i++)
                {
                    if (computedHash[i] != passwordHash[i]) return false;
                }
            }
            return true;
        }
    }
}
