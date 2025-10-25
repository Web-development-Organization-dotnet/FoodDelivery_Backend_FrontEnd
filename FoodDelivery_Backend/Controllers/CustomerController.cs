using FoodDelivery_Backend.Data;
using FoodDelivery_Backend.Models;
using FoodDelivery_Backend.Models.Common;
using FoodDelivery_Backend.Models.ResponseModel;
using System;
using System.Collections.Generic;
using System.Dynamic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Data.Entity;

namespace FoodDelivery_Backend.Controllers
{
    public class CustomerController : ApiController
    {
        Food_Delivery_DbEntities db_obj = new Food_Delivery_DbEntities();

        [HttpPost]
        [ActionName("RegisterCustomerType")]
        public async Task<GenericResponse> InsertCustType([FromBody] CustomerType val)
        {

            try
            {
                
                string cd = (val.type_desc.Substring(0, 2) + "-" + val.type_desc.Substring(val.type_desc.Length - 2)).ToUpper();
                var query = await db_obj.tbl_cust_type.Where(a => a.cust_type_cd == cd).FirstOrDefaultAsync();
                if (query == null)
                {
                    var model = new tbl_cust_type()
                    {
                        cust_type_cd = cd,
                        type_desc = val.type_desc,
                        order_limit = val.order_limit,
                        total_turnover = val.total_turnover

                    };
                    db_obj.tbl_cust_type.Add(model);
                    db_obj.SaveChanges();

                    //return Ok("Food Type Successfully Registered!!");
                    return new GenericResponse()
                    {
                        message = "Customer Type Successfully Registered!!",
                        Status = "Success"
                    };

                }
                else
                {
                    //return BadRequest("Supplier Type Not Registered!!");
                    return new GenericResponse()
                    {
                        message = "Customer Type already exists!!",
                        Status = "Failed"
                    };
                }

            }
            catch (Exception e)
            {
                //return Content(HttpStatusCode.BadRequest, new ErrorResponse()
                //{
                //    stackTrace = e.StackTrace,
                //    originalExceptionMessage = e.Message,
                //    message = "Exception Occured",
                //    innerException = e.InnerException.ToString()
                //});
                return new GenericResponse()
                {
                    message = $"Exception Occurred: {e.Message}. Inner Exception: {e.InnerException.ToString()}",
                    Status = "Exception"
                };
            }

        }

        [HttpGet]
        [ActionName("GetAllCustomerType")]

        public async Task<IHttpActionResult> GetAllCustomerType()
        {
            try
            {
                var query = await db_obj.tbl_cust_type.ToListAsync();
                if (query != null)
                {
                    var resultModel = new List<CustomerType>();
                    foreach (var item in query)
                    {
                        var subModel = new CustomerType()
                        {
                            cust_type_cd = item.cust_type_cd,
                            type_desc = item.type_desc,
                            order_limit = item.order_limit ?? 0,
                            total_turnover = item.total_turnover ?? 0
                        };
                        resultModel.Add(subModel);
                    }
                    return Ok(resultModel);
                }
                else
                {
                    return BadRequest("Customer Type not Found!!");
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
        [ActionName("GetCustType")]
        public async Task<IHttpActionResult> FetchCustType(string cust_type_cd)
        {
            try
            {
                //getting the data from customer type table with customer type code
                var query = await db_obj.tbl_cust_type.Where(a => a.cust_type_cd == cust_type_cd).FirstOrDefaultAsync();

                if (query != null)
                {
                    //query tbl_food_type with the foreign key food_type_cd
                    //var query1 = await db_obj.tbl_cust_type.Where(a => a.food_type_cd == query.food_type_cd).FirstOrDefaultAsync();
                    var model = new CustomerType()
                    {
                        cust_type_cd = query.cust_type_cd,
                        type_desc = query.type_desc,
                        order_limit = query.order_limit ?? 0,
                        total_turnover = query.total_turnover ?? 0
                    };

                    //var model = new FoodInfoModel()
                    //{
                    //    food_id = query.food_id,
                    //    food_name = query.food_name,
                    //    food_img = query.food_img,
                    //    foodType = type_obj,
                    //    food_qty = query.food_qty ?? 0, // conversion of nullable decimal to decimal
                    //    food_description = query.food_description,
                    //    food_img_paths = GetImagePathFromDB(query.food_img)

                    //};

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
        [ActionName("UpdateCustType")]

        public async Task<GenericResponse> updateCustType([FromBody] CustomerType val)
        {
            try
            {
                var query = await db_obj.tbl_cust_type.Where(a => a.cust_type_cd == val.cust_type_cd.ToUpper()).FirstOrDefaultAsync();
                if (query != null)
                {
                    
                    query.order_limit = val.order_limit;
                    query.total_turnover = val.total_turnover;

                    db_obj.SaveChanges();

                    //return Ok("Cust Type Updated Successfully!!");
                    return new GenericResponse()
                    {
                        message = "Customer Type Successfully Updated!!",
                        Status = "Success"
                    };
                }
                else
                {
                    return new GenericResponse()
                    {
                        message = "Condition does not satisfy to update Customer Type",
                        Status = "Failed"
                    };
                }


            }
            catch (Exception e)
            {
                return new GenericResponse()
                {
                    message = $"Exception Occurred: {e.Message}. Inner Exception: {e.InnerException.ToString()}",
                    Status = "Exception"
                };

            }

        }

    }
}