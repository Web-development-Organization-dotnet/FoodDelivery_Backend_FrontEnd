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
                var query = await db_obj.tbl_food_type.Where(a => a.food_type_cd == val.foodType.food_type_cd).FirstOrDefaultAsync();
                if (query != null)
                {
                    var model = new tbl_food_info()
                    {
                        food_name = val.food_name,
                        food_img = val.food_img,
                        food_type_cd = val.foodType.food_type_cd,
                        food_qty = val.food_qty,
                        food_description = val.food_description

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

        [HttpGet]
        [ActionName("GetFoodInfo")]
        public async Task<IHttpActionResult> FetchFoodInfo(int food_id)
        {
            try
            {
                //getting the data from food info table with food id
                var query = await db_obj.tbl_food_info.Where(a => a.food_id == food_id).FirstOrDefaultAsync();

                if (query != null)
                {
                    //query tbl_food_type with the foreign key food_type_cd
                    var query1 = await db_obj.tbl_food_type.Where(a => a.food_type_cd == query.food_type_cd).FirstOrDefaultAsync();
                    var type_obj = new FoodTypeModel()
                    {
                        food_category = query1.food_category,
                        food_type = query1.food_type,
                        food_type_cd = query1.food_type_cd,
                        type_desc = query1.type_desc
                    };

                    var model = new FoodInfoModel()
                    {
                        food_id = query.food_id,
                        food_name = query.food_name,
                        food_img = query.food_img,
                        foodType = type_obj,
                        food_qty = query.food_qty ?? 0, // conversion of nullable decimal to decimal
                        food_description = query.food_description

                    };

                    return Ok(model);
                }
                else
                {
                    return BadRequest("Food Info Not Found!!");
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



        [HttpPut]
        [ActionName("UpdateFoodInfo")]

        public async Task<IHttpActionResult> updateFoodInfo([FromBody] FoodInfoModel val)
        {
            try
            {
                var query = await db_obj.tbl_food_info.Where(a => a.food_id == val.food_id).FirstOrDefaultAsync();
                if (query != null)
                {
                    query.food_description = val.food_description;
                    query.food_name = val.food_name;
                    query.food_img = val.food_img;

                    db_obj.SaveChanges();

                    return Ok("Food Info Updated Successfully!!");
                }
                else
                {
                    return BadRequest("Food Info Not Updated!!");
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
