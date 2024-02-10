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
    public class FoodSupplierController : ApiController
    {
        Food_Delivery_DbEntities db_obj = new Food_Delivery_DbEntities();

        [HttpPost]
        [ActionName("RegisterSupplierType")]
        public async Task<IHttpActionResult> InsertSupplierType([FromBody] SupplierType val)
        {
            try
            {
                var query = await db_obj.tbl_supplier_type.Where(a => a.supplier_type == val.supplier_type).FirstOrDefaultAsync();
                if (query == null)
                {
                    var model = new tbl_supplier_type()
                    {
                        supplier_type = val.supplier_type.ToUpper(),
                        description = val.description,
                        yearly_turnover = val.yearly_turnover

                    };
                    db_obj.tbl_supplier_type.Add(model);
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
        [ActionName("UpdateSupplierType")]

        public async Task<IHttpActionResult> UpdateSupplierType([FromBody] SupplierType val)
        {
            try
            {
                var query = await db_obj.tbl_supplier_type.Where(a => a.supplier_type == val.supplier_type).FirstOrDefaultAsync();
                if (query != null)
                {
                    query.description = val.description;
                    query.yearly_turnover = val.yearly_turnover;

                    db_obj.SaveChanges();

                    return Ok("Supplier Type Successfully Updated!!");
                }
                else
                {
                    return BadRequest("Supplier Type Not Updated!!");
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
    }
}
