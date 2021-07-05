namespace Pooker.ApplicationService.Commands
{
    using Pooker.ApplicationService.Configuration;
    using Pooker.Domain.Domain;
    using Pooker.DTO.Request;
    using Pooker.Infrastructure.Data.Configuration;
    using System.Threading.Tasks;
    public class InsertOrRegisterUserCommand : CommandAsync<DBContext>
    {
        private readonly RegisterUserDto registerUserDto = null;

        public InsertOrRegisterUserCommand(RegisterUserDto registerUserDto)
        {
            this.registerUserDto = registerUserDto;
        }
        public override async Task ExecuteAsync(DBContext dbContext)
        {
            dbContext.User.Add(this.CreateUser());
            dbContext.SaveChanges();
        }

        private User CreateUser()
        {
            byte[] passwordHash, passwordSalt;

            CreatePasswordHash(this.registerUserDto.Password, out passwordHash, out passwordSalt);

            return new User()
            {
                Email = this.registerUserDto.Email,
                Username = this.registerUserDto.Name,
                PasswordHash = passwordHash,
                PasswordSalt = passwordSalt
            };
        }
        private void CreatePasswordHash(string password, out byte[] passwordHash, out byte[] passwordSalt)
        {
            using (var hmac = new System.Security.Cryptography.HMACSHA512())
            {
                passwordSalt = hmac.Key;
                passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
            }
        }
    }
}
