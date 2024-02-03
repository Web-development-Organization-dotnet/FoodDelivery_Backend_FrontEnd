using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FoodDelivery_Backend.Models
{
    public class SupplierType
    {
        public string supplier_type { get; set; }
        public string description { get; set; }
        public decimal yearly_turnover { get; set; }

    }
}