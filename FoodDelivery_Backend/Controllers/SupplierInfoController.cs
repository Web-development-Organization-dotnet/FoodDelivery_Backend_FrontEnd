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
    public class SupplierInfoController : ApiController
    {
        Food_Delivery_DbEntities db_obj = new Food_Delivery_DbEntities();

        [HttpPost]
        [ActionName("InsertSupplierInfo")]
        public async Task<IHttpActionResult> InsertSupplierInfo([FromBody] SupplierInfo val)
        {
            try
            {
                var query = await db_obj.tbl_supplier_type.Where(a => a.supplier_type == val.ST.supplier_type).FirstOrDefaultAsync();
                if (query != null)
                {
                    var model = new tbl_supplier_info()
                    {

                        supplier_name=val.supplier_name,
                        supplier_status=val.supplier_status,
                        latitude=val.latitude,
                        longtitude=val.longtitude,
                        pincode=val.pincode,
                        reg_date=val.reg_date,
                        serv_pin_list=val.serv_pin_list,
                        supplier_address=val.supplier_address,
                        supplier_gst_num=val.supplier_gst_num,
                        supplier_type=val.ST.supplier_type

                    };
                    db_obj.tbl_supplier_info.Add(model);
                    db_obj.SaveChanges();

                    return Ok("Supplier Type Successfully Registered!!");
                }
                else
                {
                    return BadRequest("Supplier Type Not Registered!!");
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
        [ActionName("UpdateSupplierInfo")]

        public async Task<IHttpActionResult> UpdateSupplierType([FromBody] SupplierInfo val)
        {
            try
            {
                var query = await db_obj.tbl_supplier_info.Where(a => a.supplier_id == val.supplier_id).FirstOrDefaultAsync();
                if (query != null)
                {
                    query.supplier_name = val.supplier_name;
                    query.supplier_status = val.supplier_status;
                    query.latitude = val.latitude;
                    query.longtitude = val.longtitude;
                    query.pincode = val.pincode;
                    query.reg_date = val.reg_date;
                    query.serv_pin_list = val.serv_pin_list;
                    query.supplier_address = val.supplier_address;
                    query.supplier_gst_num = val.supplier_gst_num;
                    if(query.supplier_type!=val.ST.supplier_type)
                    {
                        var query1= await db_obj.tbl_supplier_type.Where(a => a.supplier_type == val.ST.supplier_type).FirstOrDefaultAsync();
                        if(query1!=null)
                        {
                            query.supplier_type = val.ST.supplier_type;
                        }
                        else
                        {
                            return Ok("Supplier Info Updated!!Supplier Type not updated");

                        }
                    }


                    db_obj.SaveChanges();

                    return Ok("Supplier Info Successfully Updated!!");
                }
                else
                {
                    return BadRequest("Supplier Info Not Updated!!");
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
