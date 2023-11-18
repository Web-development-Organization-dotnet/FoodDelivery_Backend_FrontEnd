using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FoodDelivery_Backend.Models
{
    public class adminInfoModelClass
    {
        public string name { get; set; }
        public string email { get; set; }
        public string status { get; set; }
        public string reg_date { get; set; }
        public decimal phone { get; set; }
        public string photo_id_no { get; set; }
        public string password { get; set; }
    }
}