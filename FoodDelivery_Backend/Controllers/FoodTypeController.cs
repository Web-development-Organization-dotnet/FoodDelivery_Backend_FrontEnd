using FoodDelivery_Backend.Data;
using FoodDelivery_Backend.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using ActionNameAttribute = System.Web.Http.ActionNameAttribute;
using HttpPostAttribute = System.Web.Http.HttpPostAttribute;

namespace FoodDelivery_Backend.Controllers
{
    public class FoodTypeController : Controller
    {
        Food_Delivery_DbEntities db_obj = new Food_Delivery_DbEntities();



        // GET: FoodType
        public ActionResult Index()
        {
            return View();
        }


        [HttpPost]
        [ActionName("insertFoodType")]
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