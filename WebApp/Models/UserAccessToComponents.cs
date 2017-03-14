using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApiWindowsAuth.Models
{
    public class UserAccessToComponents
    {
        public string UserName { get; set; }

        public List<string> Components { get; set; }
    }
}