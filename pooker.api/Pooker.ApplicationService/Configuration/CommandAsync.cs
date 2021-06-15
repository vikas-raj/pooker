using Pooker.Infrastructure.Data.Configuration;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Pooker.ApplicationService.Configuration
{
    /// <summary>
    /// Abstract CommandAsync implements ICommandAsync.
    /// </summary>
    public abstract class CommandAsync<T> : ICommandAsync<T>
        where T : DBContext
    {
        /// <summary>
        /// Gets or sets primay key field.
        /// </summary>
        public int Id { get; protected set; }

        /// <summary>
        /// ExecuteAsync.
        /// </summary>
        /// <param name="dbContext">DbContext.</param>
        /// <returns>Task.</returns>
        public abstract Task ExecuteAsync(T dbContext);
    }
}
