namespace Pooker.Infrastructure.Query.Interface
{
    using System.Threading.Tasks;

    public interface IQueryAsync<TReturnType, TQueryServiceType>
    {
        /// <summary>
        /// Asynchrnous ExecuteAsync.
        /// </summary>
        /// <param name="queryServiceType">QueryServiceType.</param>
        /// <returns>Task TReturnType.</returns>
        public Task<TReturnType> ExecuteAsync(TQueryServiceType queryServiceType);
    }
}
