using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace pooker.api.Controllers
{
    public class PookerControllerBase : ControllerBase
    {
        protected int UserId
        {
            get
            {
                return Convert.ToInt32(this.Request?.Headers["UserId"]);
            }
        }

        protected string UserGuid
        {
            get
            {
                return this.Request?.Headers["UserGuid"];
            }
        }
    }
}
