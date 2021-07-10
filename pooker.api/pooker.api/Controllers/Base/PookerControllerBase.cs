using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using Microsoft.AspNetCore.Authorization;
using System.Security.Claims;

namespace pooker.api.Controllers
{
    [Authorize]
    public class PookerControllerBase : ControllerBase
    {
        protected int UserId
        {
            get
            {
                var identity = this.User.Identity as ClaimsIdentity;

                var userId = Convert.ToInt32(identity.Claims.FirstOrDefault(x => x.Type == "UserId").Value);

                return userId;
            }
        }

        protected string UserEmailId
        {
            get
            {
                var identity = this.User.Identity as ClaimsIdentity;
                var email = identity.Claims.FirstOrDefault(x => x.Type == "Email").Value;

                return email;
            }
        }

        protected string UserName
        {
            get
            {
                var identity = this.User.Identity as ClaimsIdentity;
                var name = identity.Claims.FirstOrDefault(x => x.Type == "Name").Value;

                return name;
            }
        }

        //protected string UserGuid
        //{
        //    get
        //    {
        //        var identity = this.User.Identity as ClaimsIdentity;
        //        var name = identity.Claims.FirstOrDefault(x => x.Type == "Name").Value;

        //        return name;
        //    }
        //}
    }
}
