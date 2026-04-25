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
        [HttpPost]
        [ActionName("Login")]
        public async Task<LoginResponse> CustLogin([FromBody] SupplierLogin val)
        {

            try
            {
                var model = new List<SupplierLogin>();
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
        public LoginResponse InsertCustomer([FromBody] SupplierLogin val)
        {
            var model = new tbl_cust_info
            {
                cust_name = val.supplier_name,
                cust_email = val.supplier_email,
                cust_passwd = val.supplier_passwd
            };

            db_obj.tbl_cust_info.Add(model);
            db_obj.SaveChanges();

            return new LoginResponse()
            {
                message = "Customer Registration Successful"
            };
        }

    }
}