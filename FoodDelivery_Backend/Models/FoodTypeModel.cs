using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FoodDelivery_Backend.Models
{
    public class FoodTypeModel
    {
        public string food_type_cd { get; set; }
        public string food_type { get; set; }
        public string type_desc { get; set; }
        public string food_category { get; set; }
    }
}