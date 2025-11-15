using FoodDelivery_Backend.Data;
using FoodDelivery_Backend.Models;
using FoodDelivery_Backend.Models.Common;
using FoodDelivery_Backend.Models.ResponseModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Dynamic;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Data.Entity;

namespace FoodDelivery_Backend.Controllers
{
    public class CustomerInfoController : ApiController
    {
        Food_Delivery_DbEntities db_obj = new Food_Delivery_DbEntities();

        [HttpGet]
        [ActionName("GetAllCustomerInfo")]

        public async Task<IHttpActionResult> GetAllCustomerInfo()
        {
            
            try
            {
                var query = await db_obj.tbl_cust_info.ToListAsync();
                if (query != null)
                {
                    var resultModel = new List<CustomerInfo>();
                    foreach (var item in query)
                    {
                        var query1 = await db_obj.tbl_cust_type.Where(a => a.cust_type_cd == item.cust_type_cd).FirstOrDefaultAsync();
                        var type_obj = new CustomerType()
                        {
                            type_desc = query1.type_desc,
                            order_limit = query1.order_limit ?? 0,
                            cust_type_cd = query1.cust_type_cd,
                            total_turnover = query1.total_turnover ?? 0
                        };

                        var model = new CustomerInfo()
                        {
                            cust_id = item.cust_id,
                            cust_type_cd = item.cust_type_cd,
                            cust_name = item.cust_name,
                            cust_email = item.cust_email,
                            cust_phno = item.cust_phno ?? 0,
                            cust_pin = item.cust_pin ?? 0


                        };
                        resultModel.Add(model);
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

        [HttpPost]
        [ActionName("RegisterCustomerInfo")]
        public async Task<GenericResponse> InsertCustInfo([FromBody] CustomerInfo val)
        {

            try
            {

                decimal cd = val.cust_phno;
                var query = await db_obj.tbl_cust_info.Where(a => a.cust_phno == cd).FirstOrDefaultAsync();
                if (query == null)
                {
                    var model = new tbl_cust_info()
                    {
                        cust_type_cd = val.custType.cust_type_cd,
                        cust_name = val.cust_name,
                        cust_email = val.cust_email,
                        cust_phno = cd,
                        cust_pin = val.cust_pin

                    };
                    db_obj.tbl_cust_info.Add(model);
                    db_obj.SaveChanges();

                    return new GenericResponse()
                    {
                        message = "Customer Info Successfully Registered!!",
                        Status = "Success"
                    };

                }
                else
                {
                    return new GenericResponse()
                    {
                        message = "This phone number already exists!!",
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
        [ActionName("GetCustInfoById")]
        public async Task<IHttpActionResult> FetchCustInfoById(int cust_id)
        {
            try
            {
                //getting the data from cust info table with food id
                var query = await db_obj.tbl_cust_info.Where(a => a.cust_id == cust_id).FirstOrDefaultAsync();

                if (query != null)
                {
                    //query tbl_cust_type with the foreign key cust_type_cd
                    var query1 = await db_obj.tbl_cust_type.Where(a => a.cust_type_cd == query.cust_type_cd).FirstOrDefaultAsync();
                    var type_obj = new CustomerType()
                    {
                        cust_type_cd = query1.cust_type_cd,
                        type_desc = query1.type_desc,
                        order_limit = query1.order_limit ?? 0,
                        total_turnover = query1.total_turnover ?? 0
                    };

                    var model = new CustomerInfo()
                    {
                        cust_id = query.cust_id,
                        cust_name = query.cust_name,
                        cust_email = query.cust_email,
                        custType = type_obj,
                        cust_phno = query.cust_phno ?? 0, // conversion of nullable decimal to decimal
                        cust_pin = query.cust_pin ?? 0

                    };

                    return Ok(model);
                }
                else
                {
                    return BadRequest("Customer Information Not Found!!");
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
        [ActionName("UpdateCustInfo")]

        public async Task<IHttpActionResult> UpdateCustInfo([FromBody] CustomerInfo val)
        {
            try
            {
                var query = await db_obj.tbl_cust_info.Where(a => a.cust_id == val.cust_id).FirstOrDefaultAsync();
                if (query != null)
                {
                    query.cust_name = val.cust_name;
                    query.cust_email = val.cust_email;
                    query.cust_phno = val.cust_phno;
                    query.cust_pin = val.cust_pin;

                    db_obj.SaveChanges();

                    return Ok("Customer Information Updated Successfully!!");
                }
                else
                {
                    return BadRequest("Customer Information Not Updated!!");
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