using Pooker.Infrastructure.Data.Configuration;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Pooker.ApplicationService.Configuration
{
    /// <summary>
    /// ICommandServiceAsync.
    /// </summary>
    public interface ICommandServiceAsync
    {
        /// <summary>
        /// Abstract ExecuteAsync method.
        /// </summary>
        /// <param name="commands">Array of CommandAsync.</param>
        /// <returns>Task.</returns>
        Task ExecuteAsync<T>(params CommandAsync<T>[] commands)
            where T : DBContext;
    }
}
