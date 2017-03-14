using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApiWindowsAuth.Models;

namespace WebApiWindowsAuth.Controllers
{
    [Authorize]
    public class AuthController : ApiController
    {

        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        public string Get(int id)
        {
            return id + "were sent to Server " + User.Identity.Name;
        }

        public bool Post([FromBody]ExternalLoginViewModel loginModel)
        {
            if (loginModel.Name == "Róka")
                return true;

            return false;
        }

        public string Put(int id, [FromBody]ExternalLoginViewModel loginModel)
        {
            return id + " has been updated with " + loginModel.Name;
        }

        public string Delete(int id)
        {
            return id + " has been Deleted " + User.Identity.Name;
        }

        public string Patch(int id, [FromBody]ExternalLoginViewModel loginModel)
        {
            return id + " has been patched with: " + loginModel.Name;
        }
    }
}
