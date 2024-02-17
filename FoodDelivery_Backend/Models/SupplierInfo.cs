using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FoodDelivery_Backend.Models
{
    public class SupplierInfo
    {
        public decimal supplier_id { get; set; }
        public string supplier_name { get; set; }
        public string supplier_address { get; set; }
        public decimal supplier_gst_num { get; set; }
        public string reg_date { get; set; }
        public decimal pincode { get; set; }
        public SupplierType ST { get; set; }
        public string supplier_status { get; set; }
        public string longtitude { get; set; }
        public string latitude { get; set; }
        public string serv_pin_list { get; set; }


    }
}