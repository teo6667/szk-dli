using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Respository
{
    public class Interest
    {
        public int InterestId { get; set; }
        public string Name { get; set; }

        public virtual ICollection<User> Users { get; set; }

        public Interest()
        {
            this.Users = new HashSet<User>();
        }
    }
}
