namespace Pooker.Infrastructure.Query
{
    using Pooker.Infrastructure.Data.Configuration;
    using Pooker.Infrastructure.Query.Interface;
    using System;
    using System.Threading.Tasks;
    public abstract class QueryAsync<T, T1> : IQueryAsync<T, T1>
        where T1 : DBContext
    {
        /// <summary>
        /// Abstract ExecuteAsync.
        /// </summary>
        /// <param name="dbContext">DbContext.</param>
        /// <returns>T.</returns>
        public abstract Task<T> ExecuteAsync(T1 dbContext);

        /// <summary>
        /// ExecuteInternalAsync.
        /// </summary>
        /// <param name="dbContext">DbContext.</param>
        /// <param name="action">Func T1, Task T.</param>
        /// <returns>Task T.</returns>
        public async Task<T> ExecuteInternalAsync(T1 dbContext, Func<T1, Task<T>> action)
        {
            return await action(dbContext).ConfigureAwait(false);
        }
    }
}
