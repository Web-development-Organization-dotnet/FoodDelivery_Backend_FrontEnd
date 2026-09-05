using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FoodDelivery_Backend.Models
{
    public class SupplierFoodTypeInfo
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
        public string supplier_email { get; set; }
        public string food_type_code { get; set; }
        public string food_type { get; set; }
        public string type_desc { get; set; }
        public string food_category { get; set; }
        public string item_name { get; set; }
        public decimal item_rate { get; set; }
        public string item_type { get; set; }
        public decimal supplier_menu_id { get; set; }
        public decimal food_id { get; set; }
        public decimal available_qty { get; set; }
        public string service_closing_time { get; set; }
        public string service_opening_time { get; set; }
        public FoodInfoModel FoodInfoObject { get; set; }
        public SupplierInfo SupplierObject { get; set; }
    }
}