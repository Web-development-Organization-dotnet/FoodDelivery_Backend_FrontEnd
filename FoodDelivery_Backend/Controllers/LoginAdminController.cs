using FoodDelivery_Backend.Data;
using FoodDelivery_Backend.Models;
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
    public class LoginAdminController : ApiController
    {
        Food_Delivery_DbEntities obj = new Food_Delivery_DbEntities();
        [HttpGet]
        [ActionName("LoginVerify")]
        public async Task<String> VerifyEmpLogin([FromBody] adminInfoModelClass val)
        {

            try
            {
                var model = new List<adminInfoModelClass>();
                var query = await obj.tbl_admin_info.Where(a => a.email == val.email && a.password == val.password).FirstOrDefaultAsync();
                if (query != null)
                {
                    return "The user is present";
                }

                else
                {
                    return "The user not present!!!!";
                }
            }
            catch (Exception e)
            {
                return e.Message + " / " + e.StackTrace;
            }
        }

    }
}
