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
    public class SupplierController : ApiController
    {
        Food_Delivery_DbEntities db_obj = new Food_Delivery_DbEntities();
        // GET: Supplier
        [HttpGet]
        [ActionName("GetAllSupplierType")]

        public async Task<IHttpActionResult> GetAllSupplierType()
        {
            try
            {
                var query = await db_obj.tbl_supplier_type.ToListAsync();
                if (query != null)
                {
                    var resultModel = new List<SupplierType>();
                    foreach (var item in query)
                    {
                        var subModel = new SupplierType()
                        {
                            supplier_type = item.supplier_type,
                            description = item.description,
                            yearly_turnover = item.yearly_turnover ?? 0
                        };
                        resultModel.Add(subModel);
                    }
                    return Ok(resultModel);
                }
                else
                {
                    return BadRequest("Supplier Type not Found!!");
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
        [ActionName("Login")]
        public async Task<LoginResponse> SupplierLogin([FromBody] SupplierInfo val)
        {

            try
            {
                var model = new List<SupplierInfo>();
                var query = await db_obj.tbl_supplier_info.Where(a => a.supplier_email == val.supplier_email && a.supplier_passwd == val.supplier_passwd /*&& a.status == "active"*/).FirstOrDefaultAsync();
                if (query != null)
                {
                    return new LoginResponse()
                    {
                        id = query.supplier_id,
                        message = "Login successful",
                        name = query.supplier_name,
                        profileImageURL = null,
                        role = "SUPPLIER",
                        status = "OK"
                    };
                }

                else
                {
                    return new LoginResponse()
                    {
                        id = 0,
                        message = "User not found",
                        name = null,
                        profileImageURL = null,
                        role = null,
                        status = null
                    };
                }
            }
            catch (Exception e)
            {

                return new LoginResponse()
                {
                    id = 0,
                    message = e.Message + " / " + e.StackTrace,
                    name = null,
                    profileImageURL = null,
                    role = null,
                    status = null
                };
            }
        }

        [HttpPost]
        [ActionName("Register")]
        public LoginResponse InsertSupplier([FromBody] SupplierInfo val)
        {
            var model = new tbl_supplier_info
            {
                supplier_name = val.supplier_name,
                supplier_address = val.supplier_address,
                supplier_gst_num = val.supplier_gst_num,
                reg_date = val.reg_date,
                pincode = val.pincode,
                supplier_status = val.supplier_status,
                longtitude = val.longtitude,
                latitude = val.latitude,
                serv_pin_list = val.serv_pin_list,
                supplier_email = val.supplier_email,
                supplier_passwd = val.supplier_passwd
            };

            db_obj.tbl_supplier_info.Add(model);
            db_obj.SaveChanges();

            return new LoginResponse()
            {
                message = "Supplier Registration Successful"
            };
        }

    }
}