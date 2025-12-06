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
    }
}