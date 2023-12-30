using FoodDelivery_Backend.Data;
using FoodDelivery_Backend.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Threading.Tasks;
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
        public async Task<String>  insertFoodType([FromBody] FoodTypeModel val)
        {
            string cd = val.food_type.Substring(0, 2) + "-" + val.food_category.Substring(0, 2);
            cd = cd.ToUpper();
            var query = await db_obj.tbl_food_type.Where( a=> a.food_type_cd == cd).FirstOrDefaultAsync();
            if (query == null)
            {
                var model = new tbl_food_type()
                {
                    food_category = val.food_category,
                    food_type = val.food_type,
                    food_type_cd = cd,
                    type_desc = val.type_desc

                };


                db_obj.tbl_food_type.Add(model);
                db_obj.SaveChanges();

                return "Food Type Successfully Registered!!";
            }
            else 
            {
                return "Food Type Not Registered!!";
            }
        }
    }
}