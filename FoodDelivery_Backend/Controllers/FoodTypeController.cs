using FoodDelivery_Backend.Data;
using FoodDelivery_Backend.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace FoodDelivery_Backend.Controllers
{
    public class FoodTypeController : ApiController
    {
        Food_Delivery_DbEntities db_obj = new Food_Delivery_DbEntities();
        
        [HttpGet]
        [ActionName("FoodTypeDetails")]
        [Route("FoodTypeDetails/{Id}")]
        public string GetFoodTypeDetails(int id)
        {
            return "Ok";
        }



        [HttpPost]
        [ActionName("RegisterFoodType")]
        public String insertFoodType([FromBody] FoodTypeModel val)
        {
            var model = new tbl_food_type
            {
                
            };

            db_obj.tbl_food_type.Add(model);
            db_obj.SaveChanges();

            return "Food Type Successfully Registered!!";
        }
    }
}