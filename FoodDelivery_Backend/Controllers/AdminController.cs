using FoodDelivery_Backend.Data;
using FoodDelivery_Backend.Models;
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
    public class AdminController : ApiController
    {
        Food_Delivery_DbEntities db_obj = new Food_Delivery_DbEntities();

        [HttpGet]
        [ActionName("LoginVerify")]
        public async Task<LoginResponse> VerifyEmpLogin([FromBody] adminInfoModelClass val)
        {
           
            try
            {
                var model = new List<adminInfoModelClass>();
                var query = await db_obj.tbl_admin_info.Where(a => a.email == val.email && a.password == val.password && a.status=="active").FirstOrDefaultAsync();
                if (query != null)
                {
                    return new LoginResponse() { 
                        id=query.emp_id,
                        message="Login successful",
                        name=query.name,
                        profileImageURL=null,
                        role="ADMIN",
                        status="OK"       
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

        [HttpPut]
        [ActionName("updateAdmin")]
        public async Task<string> updateAdmin([FromBody] adminInfoModelClass2 val)
        {
            var query = await db_obj.tbl_admin_info.Where(a => a.emp_id == val.emp_id).FirstOrDefaultAsync();
            if (query != null)
            

                {
                    query.name = val.name;
                    query.email = val.email;
                    query.status = val.status;
                    query.reg_date = val.reg_date;
                    query.phone = val.phone;
                    query.photo_id_no = val.photo_id_no;
                    query.password = val.password;

                    db_obj.SaveChanges();

                    return "Updated Successfully!!!!";

                }
            
            else
            {
                return "Employee ID not found";
            }


                
        }

        [HttpPut]
        [ActionName("adminStatusToggle")]
        public async Task<string> adminStatusToggle([FromBody] adminInfoModelClass2 val)
        {
            var query = await db_obj.tbl_admin_info.Where(a => a.emp_id == val.emp_id).FirstOrDefaultAsync();
            if (query != null && query.status == "active")


            {
                //query.name = val.name;
                //query.email = val.email;
                query.status = "inactive";
                //query.reg_date = val.reg_date;
                //query.phone = val.phone;
                //query.photo_id_no = val.photo_id_no;
                //query.password = val.password;

                db_obj.SaveChanges();

                return "Admin Disabled Successfully!!!!";

            }
            else if(query != null && query.status=="inactive")
                {
                    query.status = "Active";
                    db_obj.SaveChanges();

                return "Admin Enabled Successfully!!!!";
                }
            else
                {
                    return "Employee ID not found";
                }



        }


    }
}
