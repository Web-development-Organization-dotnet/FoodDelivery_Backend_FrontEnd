using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FoodDelivery_Backend.Models
{
    public class SupplierLogin
    {
        public decimal supplier_id { get; set; }

        public string supplier_name { get; set; }

        public string supplier_email { get; set; }

        public string supplier_passwd { get; set; }
    }
}