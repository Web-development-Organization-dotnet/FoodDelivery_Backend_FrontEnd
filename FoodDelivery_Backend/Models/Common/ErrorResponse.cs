using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FoodDelivery_Backend.Models.Common
{
    public class ErrorResponse
    {
        public string stackTrace { get; set; }
        public string originalExceptionMessage { get; set; }
        public string message { get; set; }
        public string innerException { get; set; }
    }
}