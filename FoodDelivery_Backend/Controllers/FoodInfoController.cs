using FoodDelivery_Backend.Data;
using FoodDelivery_Backend.Models;
using FoodDelivery_Backend.Models.Common;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;

namespace FoodDelivery_Backend.Controllers
{
    public class FoodInfoController : ApiController
    {
        Food_Delivery_DbEntities db_obj = new Food_Delivery_DbEntities();

        [HttpPost]
        [ActionName("RegisterFoodInfo")]
        public async Task<IHttpActionResult> InsertFoodType([FromBody] FoodInfoModel val)
        {
            try
            {
                    var query = await db_obj.tbl_food_type.Where(a => a.food_type_cd ==val.foodType.food_type_cd).FirstOrDefaultAsync();
                    if (query != null)
                    {
                        var model = new tbl_food_info()
                        {
                             food_name = val.food_name,
                            food_img = val.food_img,
                            food_type_cd = val.foodType.food_type_cd,
                            food_qty = val.food_qty,
                            food_description=val.food_description

                        };
                        db_obj.tbl_food_info.Add(model);
                        db_obj.SaveChanges();

                        return Ok("Food Info Successfully Added!!");
                    }
                    else
                    {
                        return BadRequest("Food Info Not Added!!");
                    }
                
                
            }
            catch (Exception e)
            {
                return Content(HttpStatusCode.BadRequest, new ErrorResponse()
                {
                    stackTrace = e.StackTrace,
                    originalExceptionMessage = e.Message,
                    message = "Exception Occured",
                    innerException = e.InnerException.ToString()
                });

            }


        }

    }
}
