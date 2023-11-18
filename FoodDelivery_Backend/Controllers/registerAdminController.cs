using FoodDelivery_Backend.Data;
using FoodDelivery_Backend.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace FoodDelivery_Backend.Controllers
{
    public class registerAdminController : ApiController
    {
        Food_Delivery_DbEntities db_obj = new Food_Delivery_DbEntities();
        [HttpPost]
        [ActionName("insertAdmin")]
        public String insertAdmin([FromBody] adminInfoModelClass val)
        {
            var model = new tbl_admin_info
            {
                name = val.name,
                email = val.email,
                status = val.status,
                reg_date = val.reg_date,
                phone = val.phone,
                photo_id_no = val.photo_id_no,
                password = val.password
            };

            db_obj.tbl_admin_info.Add(model);
            db_obj.SaveChanges();

            return "Admin Successfully Registered!!";
        }
    }
}
