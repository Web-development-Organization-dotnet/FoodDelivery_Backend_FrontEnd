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
    public class AgentController : ApiController
    {
        Food_Delivery_DbEntities db_obj = new Food_Delivery_DbEntities();

        // GET: Agent
        [HttpGet]
        [ActionName("LoginDetails")]
        public async Task<AdminInfoResponse> AdminDetails(int agent_id)
        {

            try
            {
                var model = new List<agentInfoModelClass>();
                var query = await db_obj.tbl_agent_info.Where(a => a.agent_id == agent_id).FirstOrDefaultAsync();
                if (query != null)
                {
                    return new AdminInfoResponse()
                    {
                        emp_id = query.agent_id,
                        email = query.email,
                        name = query.name,
                        phone = query.phone,
                        reg_date = query.reg_date,
                        status = query.status,
                        photo_id_no = query.photo_id_no,
                        message = "RECORD FOUND"
                    };
                }
                else
                {
                    return new AdminInfoResponse()
                    {
                        emp_id = 0,
                        email = null,
                        name = null,
                        phone = null,
                        reg_date = null,
                        status = null,
                        photo_id_no = null,
                        message = "RECORD NOT FOUND"
                    };
                }
            }
            catch (Exception e)
            {

                return new AdminInfoResponse()
                {
                    emp_id = 0,
                    email = null,
                    name = null,
                    phone = null,
                    reg_date = null,
                    status = null,
                    photo_id_no = null,
                    message = e.Message + '|' + e.StackTrace
                };
            }
        }

        [HttpPost]
        [ActionName("Login")]
        public async Task<LoginResponse> AgentLogin([FromBody] agentInfoModelClass val)
        {

            try
            {
                var model = new List<agentInfoModelClass>();
                var query = await db_obj.tbl_agent_info.Where(a => a.email == val.email && a.password == val.password && a.status == "active").FirstOrDefaultAsync();
                if (query != null)
                {
                    return new LoginResponse()
                    {
                        id = query.agent_id,
                        message = "Login successful",
                        name = query.name,
                        profileImageURL = null,
                        role = "AGENT",
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
        public LoginResponse InsertAgent([FromBody] agentInfoModelClass val)
        {
            var model = new tbl_agent_info
            {
                name = val.name,
                email = val.email,
                status = "active",
                reg_date = DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss"),
                phone = val.phone,
                photo_id_no = val.photo_id_no,
                password = val.password
            };

            db_obj.tbl_agent_info.Add(model);
            db_obj.SaveChanges();

            return new LoginResponse()
            {
                message = "Agent Registration Successful"
            };
        }

        
    }
}