using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FoodDelivery_Backend.Models
{
    public class SupplierWallet
    {
        public decimal supplier_wallet_id { get; set; }
        public decimal supplier_id { get; set; }
        public decimal wallet_balance { get; set; }
        public string last_update_date { get; set; }
    }
}