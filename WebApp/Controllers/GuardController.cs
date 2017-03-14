using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApiWindowsAuth.Models;

namespace WebApiWindowsAuth.Controllers
{
    public class GuardController : ApiController
    {
        public bool Get(string componentName)
        {
            var userAccess = new List<UserAccessToComponents>
            {
              new UserAccessToComponents
              {
                  UserName ="username",
                  Components = new List<string>{ "Speti43" } }
            };

            var userComponents = userAccess.Where(r => r.UserName == User.Identity.Name)
                                           .SelectMany(r=>r.Components);

            var granted = userComponents.Any(r => r == componentName);
            granted = true;
            return granted;
        }
    }
}