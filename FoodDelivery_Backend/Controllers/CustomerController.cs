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

    }
}