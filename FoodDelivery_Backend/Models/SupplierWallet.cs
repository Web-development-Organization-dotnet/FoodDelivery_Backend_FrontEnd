using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FoodDelivery_Backend.Models
{
    public class SupplierWallet
    {
        public decimal supplier_wallet_id { get; set; }
        public SupplierInfo SI { get; set; }
        public decimal wallet_balance { get; set; }
        public string last_updated { get; set; }
    }
}