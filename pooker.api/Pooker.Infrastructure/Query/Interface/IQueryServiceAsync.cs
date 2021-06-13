namespace Pooker.Infrastructure.Query.Interface
{
    using Pooker.Infrastructure.Data.Configuration;
    using System;
    using System.Collections.Generic;
    using System.Text;
    using System.Threading.Tasks;

    public interface IQueryServiceAsync
    {
        /// <summary>
        /// Asynchrnous ExecuteAsync.
        /// </summary>
        /// <typeparam name="T">T.</typeparam>
        /// <param name="query">DbContextQueryAsync.</param>
        /// <returns>Task T.</returns>
        public Task<T> ExecuteAsync<T, T1>(QueryAsync<T, T1> query)
            where T1 : DBContext;
    }
}
