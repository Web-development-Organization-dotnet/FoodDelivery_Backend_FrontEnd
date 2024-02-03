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
                    var query = await db_obj.tbl_supplier_type.Where(a => a.supplier_type ==val.supplier_type).FirstOrDefaultAsync();
                    if (query == null)
                    {
                        var model = new tbl_supplier_type()
                        {
                            supplier_type=val.supplier_type.ToUpper(),
                            description=val.description,
                            yearly_turnover=val.yearly_turnover

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

    }
}
