using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FoodDelivery_Backend.Models
{
    public class CustomerInfo
    {
        public decimal cust_id { get; set; }
        public string cust_type_cd { get; set; }
        public string cust_name { get; set; }
        public string cust_email { get; set; }
        public decimal cust_phno { get; set; }
        public decimal cust_pin { get; set; }
        public string cust_passwd { get; set; }

        public CustomerType custType { get; set; }

    }
}