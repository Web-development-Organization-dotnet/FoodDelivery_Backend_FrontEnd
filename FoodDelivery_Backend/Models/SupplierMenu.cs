using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FoodDelivery_Backend.Models
{
    public class SupplierMenu
    {
            public string item_name { get; set; }
            public decimal item_rate { get; set; }
            public string item_type { get; set; }
            public decimal supplier_menu_id { get; set; }
            //public decimal supplier_id { get; set; }
            //public string food_type_code { get; set; }
            //public decimal food_id { get; set; }
            public decimal available_qty { get; set; }
            public string service_closing_time { get; set; }
            public string service_opening_time { get; set; }

            public FoodInfoModel FoodInfoObject { get; set; }
            public SupplierInfo SupplierObject { get; set; }
        
    }
}