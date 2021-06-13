using System;
using System.Collections.Generic;
using System.Text;

namespace Pooker.Infrastructure.Query
{
    using Pooker.Infrastructure.Data.Configuration;
    using Pooker.Infrastructure.Query.Interface;
    using System.Threading.Tasks;

    public class QueryServiceAsync : IQueryServiceAsync
    {
        /// <summary>
        /// Readonly private field.
        /// </summary>
        private readonly DBContext dbContext;

        /// <summary>
        /// Initializes a new instance of the <see cref="QueryServiceAsync"/> class.
        /// Constructor.
        /// </summary>
        /// <param name="dbContext">dbContext.</param>
        public QueryServiceAsync(DBContext dbContext)
        {
            this.dbContext = dbContext;
        }

        /// <summary>
        /// ExecuteAsync.
        /// </summary>
        /// <typeparam name="T">Type.</typeparam>
        /// <typeparam name="T1">Type1.</typeparam>
        /// <param name="query">DbContextQueryAsync.</param>
        /// <returns>Task.</returns>
        public async Task<T> ExecuteAsync<T, T1>(QueryAsync<T, T1> query)
            where T1 : DBContext
        {
            return await query.ExecuteAsync(this.dbContext as T1);
        }
    }
}
