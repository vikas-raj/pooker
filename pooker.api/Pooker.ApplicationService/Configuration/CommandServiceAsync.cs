namespace Pooker.ApplicationService.Configuration
{
    using Pooker.Infrastructure.Data.Configuration;
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.Text;
    using System.Threading.Tasks;

    /// <summary>
    /// CommandServiceAsync.
    /// </summary>
    public class CommandServiceAsync : ICommandServiceAsync
    {
        /// <summary>
        /// Place holder for BaseDbContext.
        /// </summary>
        private readonly DBContext dbContext;

        /// <summary>
        /// Initializes a new instance of the <see cref="CommandServiceAsync"/> class.
        /// </summary>
        /// <param name="dbContext">BaseDbContext.</param>
        public CommandServiceAsync(DBContext dbContext)
        {
            this.dbContext = dbContext;
        }

        /// <summary>
        /// Command Async Execute method.
        /// </summary>
        /// <param name="commands">Array of CommandAsync.</param>
        /// <returns>Task.</returns>
        public async Task ExecuteAsync<T>(params CommandAsync<T>[] commands)
            where T : DBContext
        {
            foreach (var command in commands)
            {
                await command.ExecuteAsync(this.dbContext as T).ConfigureAwait(continueOnCapturedContext: false);
            }
        }
    }
}
