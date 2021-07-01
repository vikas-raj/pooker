namespace Pooker.Infrastructure.Query
{
    using Microsoft.EntityFrameworkCore;
    using Pooker.Domain.Domain;
    using Pooker.Infrastructure.Data.Configuration;
    using System.Linq;
    using System.Threading.Tasks;
    public class CheckUserExistQuery : QueryAsync<User, DBContext>
    {
        private readonly string email;
        public CheckUserExistQuery(string email)
        {
            this.email = email;
        }

        public override async Task<User> ExecuteAsync(DBContext dbContext)
        {
            return dbContext.User.AsNoTracking()
                            .FirstOrDefault(x => x.Email.ToLower() == this.email.ToLower());
        }
    }
}
