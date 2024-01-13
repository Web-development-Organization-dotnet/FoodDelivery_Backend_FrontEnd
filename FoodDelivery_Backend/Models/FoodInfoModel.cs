using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FoodDelivery_Backend.Models
{
    public class FoodInfoModel
    {

        public decimal food_id { get; set; }
        //public string food_type_cd { get; set; }
        public string food_name { get; set; }
        public string food_description { get; set; }
        public decimal food_qty { get; set; }
        public string food_img { get; set; }

        public FoodTypeModel foodType { get; set; }
    }
}