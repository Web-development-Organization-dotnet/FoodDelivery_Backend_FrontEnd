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
    public class SupplierMenuController : ApiController
    {
        Food_Delivery_DbEntities db_obj = new Food_Delivery_DbEntities();

        [HttpPost]
        [ActionName("InsertSupplierMenu")]
        public async Task<IHttpActionResult> InsertSupplierMenu([FromBody] SupplierMenu val)
        {
            try
            {
                var query = await db_obj.tbl_supplier_info.Where(a => a.supplier_id == val.SupplierObject.supplier_id).FirstOrDefaultAsync();
                var query1 = await db_obj.tbl_food_info.Where(a => a.food_id == val.FoodInfoObject.food_id).FirstOrDefaultAsync(); 
                if (query != null && query!=null)
                {
                    var model = new tbl_supplier_menu()
                    {

                        item_name=val.item_name,
                        item_rate=val.item_rate,
                        serv_cl_time=val.service_closing_time,
                        food_id=val.FoodInfoObject.food_id,
                        available_qty=val.available_qty,
                        food_type_code=val.FoodInfoObject.foodType.food_type_cd,
                        item_type=val.item_type,
                        serv_op_time=val.service_opening_time,
                        supplier_id=val.SupplierObject.supplier_id                       

                    };
                    db_obj.tbl_supplier_menu.Add(model);
                    db_obj.SaveChanges();

                    return Ok("Supplier Menu Successfully Registered!!");
                }
                else
                {
                    return BadRequest("Either Supplier Type or Food ID is not Registered!!");
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


        //Needs to be started from here next day
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
                    if (query.supplier_type != val.ST.supplier_type)
                    {
                        var query1 = await db_obj.tbl_supplier_type.Where(a => a.supplier_type == val.ST.supplier_type).FirstOrDefaultAsync();
                        if (query1 != null)
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

