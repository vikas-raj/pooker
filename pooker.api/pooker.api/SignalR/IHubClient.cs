using System;
using System.Collections.Generic;
using System.Text;

namespace Pooker.api.SignalR
{
    using System.Threading.Tasks;
    public interface IHubClient
    {
        Task BroadcastMessage();
    }
}
