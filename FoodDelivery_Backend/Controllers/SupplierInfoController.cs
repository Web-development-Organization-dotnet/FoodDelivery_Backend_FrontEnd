using FoodDelivery_Backend.Data;
using FoodDelivery_Backend.Models;
using FoodDelivery_Backend.Models.Common;
using FoodDelivery_Backend.Models.ResponseModel;
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
        public async Task<GenericResponse> InsertSupplierInfo([FromBody] SupplierInfo val)
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

                    //return Ok("Supplier Info Successfully Registered!!");
                    return new GenericResponse()
                    {
                        message = "Supplier Info Successfully Registered!!",
                        Status = "Success"
                    };

                }
                else
                {
                    //return BadRequest("Supplier Type Not Registered!!");
                    return new GenericResponse()
                    {
                        message = "Supplier Info Failed!!",
                        Status = "Failed"
                    };
                }


            }
            catch (Exception e)
            {
                return new GenericResponse()
                {
                    message = "Supplier Info Failed!!"  + e.Message.ToString(),
                    Status = "Failed"
                };

            }


        }

        [HttpPut]
        [ActionName("UpdateSupplierInfo")]

        public async Task<GenericResponse> UpdateSupplierType([FromBody] SupplierInfo val)
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
                           // return Ok("Supplier Info Updated!!Supplier Type not updated");
                            return new GenericResponse()
                            {
                                message = "Supplier Type not Found",
                                Status = "Failed"
                            };

                        }
                    }


                    db_obj.SaveChanges();

                    //return Ok("Supplier Info Successfully Updated!!");
                    return new GenericResponse()
                    {
                        message = "Supplier Info Successfully Updated!!",
                        Status = "Success"
                    };
                }
                else
                {
                    //return BadRequest("Supplier Info Not Updated!!");
                    return new GenericResponse()
                    {
                        message = "Supplier Info not Updated!!",
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
                    message = "Supplier Info Updation Failed!!" + e.Message.ToString(),
                    Status = "Failed"
                };

            }

        }

        [HttpGet]
        [ActionName("GetAllSupplierInfo")]

        public async Task<IHttpActionResult> GetAllSupplierInfo()
        {
            try
            {
                var query = await db_obj.tbl_supplier_info.Include(t=>t.tbl_supplier_type).Select(t=>new SupplierInfo { 
                    ST=new SupplierType() {
                        supplier_type = t.tbl_supplier_type.supplier_type,
                        description = t.tbl_supplier_type.description,
                        yearly_turnover = t.tbl_supplier_type.yearly_turnover??0,
                    },
                    latitude = t.latitude,
                    longtitude = t.longtitude,
                    pincode = t.pincode??0,
                    reg_date = t.reg_date,
                    serv_pin_list = t.serv_pin_list,
                    supplier_address = t.supplier_address,
                    supplier_gst_num = t.supplier_gst_num??0,
                    supplier_id = t.supplier_id,
                    supplier_name = t.supplier_name,
                    supplier_status = t.supplier_status,
                
                }).ToListAsync();
                if (query != null)
                {
                    //var resultModel = new List<SupplierInfo>();
                    //foreach (var item in query)
                    //{
                    //    var subModel = new SupplierType()
                    //    {
                    //        supplier_type = item.supplier_type,
                    //        description = item.description,
                    //        yearly_turnover = item.yearly_turnover ?? 0
                    //    };
                    //    resultModel.Add(subModel);
                    //}
                    return Ok(query);
                }
                else
                {
                    return BadRequest("Supplier Info not Found!!");
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
        [ActionName("GetAllSupplierInfoById")]

        public async Task<IHttpActionResult> GetAllSupplierInfoById(Decimal id)
        {
            try
            {
                var query = await db_obj.tbl_supplier_info.Where(t => t.supplier_id == id).Include(t => t.supplier_type).Select(t => new SupplierInfo
                {
                    ST = new SupplierType()
                    {
                        supplier_type = t.tbl_supplier_type.supplier_type,
                        description = t.tbl_supplier_type.description,
                        yearly_turnover = t.tbl_supplier_type.yearly_turnover ?? 0,
                    },
                    latitude = t.latitude,
                    longtitude = t.longtitude,
                    pincode = t.pincode ?? 0,
                    reg_date = t.reg_date,
                    serv_pin_list = t.serv_pin_list,
                    supplier_address = t.supplier_address,
                    supplier_gst_num = t.supplier_gst_num ?? 0,
                    supplier_id = t.supplier_id,
                    supplier_name = t.supplier_name,
                    supplier_status = t.supplier_status,

                }).FirstOrDefaultAsync();
                if (query != null)
                {
                    //var resultModel = new List<SupplierInfo>();
                    //foreach (var item in query)
                    //{
                    //    var subModel = new SupplierType()
                    //    {
                    //        supplier_type = item.supplier_type,
                    //        description = item.description,
                    //        yearly_turnover = item.yearly_turnover ?? 0
                    //    };
                    //    resultModel.Add(subModel);
                    //}
                    return Ok(query);
                }
                else
                {
                    return BadRequest("Supplier Info not Found!!");
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
