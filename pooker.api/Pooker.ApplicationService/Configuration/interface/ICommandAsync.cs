using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Pooker.ApplicationService.Configuration
{
    /// <summary>
    /// ICommandAsync.
    /// </summary>
    /// <typeparam name="TCommandServiceType">TCommandServiceType.</typeparam>
    public interface ICommandAsync<TCommandServiceType>
    {
        /// <summary>
        ///  Execute Async method.
        /// </summary>
        /// <param name="commandServiceType">TCommandServiceType</param>
        /// <returns>Task.</returns>
        Task ExecuteAsync(TCommandServiceType commandServiceType);
    }
}
