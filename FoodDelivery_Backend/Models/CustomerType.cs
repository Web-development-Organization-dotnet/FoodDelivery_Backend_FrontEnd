using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FoodDelivery_Backend.Models
{
    public class CustomerType
    {
        public string cust_type_cd { get; set; }
        public string type_desc { get; set; }
        public decimal order_limit { get; set; }
        public decimal total_turnover { get; set; }

    }
}