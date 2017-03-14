using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Respository
{
    public class User
    {
        public int UserId { get; set; }
        public string Vezeteknev { get; set; }
        public string Keresztnev { get; set; }
        public string EmailAddress { get; set; }
        public string Password { get; set; }
        public bool isActive { get; set; }

        public virtual ICollection<Interest> Interests { get; set; }

        public User()
        {
            this.Interests = new HashSet<Interest>();
        }
    }
}
    