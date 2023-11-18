using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FoodDelivery_Backend.Models.ResponseModel
{
    public class LoginResponse
    {
       public string name { get; set; }

        public string role { get; set; }

        public string profileImageURL { get; set; }

        public decimal id { get; set; }

        public string status { get; set; }

        public string message { get; set; }
    }
}