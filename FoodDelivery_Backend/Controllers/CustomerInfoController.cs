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
                        var subModel = new CustomerInfo()
                        {
                            cust_id = item.cust_id,
                            cust_type_cd = item.cust_type_cd,
                            cust_name = item.cust_name,
                            cust_email = item.cust_email,
                            cust_phno = item.cust_phno ?? 0,
                            cust_pin = item.cust_pin ?? 0
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
    }
}