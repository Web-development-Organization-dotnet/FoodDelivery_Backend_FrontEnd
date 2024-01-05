using FoodDelivery_Backend.Data;
using FoodDelivery_Backend.Models;
using FoodDelivery_Backend.Models.Common;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Dynamic;
using System.Linq;
using System.Net;
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
        [Route("FoodTypeDetails/{foodTypeCD}")]
        public async Task<IHttpActionResult> GetFoodTypeDetails(string foodTypeCD)
        {
            try
            {
                var query = await db_obj.tbl_food_type.Where(a => a.food_type_cd == foodTypeCD.ToUpper()).FirstOrDefaultAsync();
                if (query != null)
                {
                    var outputModel = new tbl_food_type()
                    {
                        food_category = query.food_category,
                        food_type = query.food_type,
                        food_type_cd = query.food_type_cd,
                        type_desc = query.type_desc

                    };
                    return Content(HttpStatusCode.OK, outputModel);
                }
                else
                {
                    return BadRequest("No Record Found with "+ foodTypeCD);
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

        [HttpPost]
        [ActionName("RegisterFoodType")]
        public async Task<IHttpActionResult> InsertFoodType([FromBody] FoodTypeModel val)
        {
            try
            {
                if (val.food_type.Length > 1 && val.food_category.Length > 1)
                {
                    // Condition for Creating Food Type Primary Key is 
                    // First two character of Food Type & '-' & First two charcater of Food Category 

                    string cd = (val.food_type.Substring(0, 2) + "-" + val.food_category.Substring(0, 2)).ToUpper();
                    var query = await db_obj.tbl_food_type.Where(a => a.food_type_cd == cd).FirstOrDefaultAsync();
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

                        return Ok("Food Type Successfully Registered!!");
                    }
                    else
                    {
                        return BadRequest("Food Type Not Registered!!");
                    }
                }
                else
                {
                    return BadRequest("Condition does not satisfied to create unique Queue for Food Type");

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