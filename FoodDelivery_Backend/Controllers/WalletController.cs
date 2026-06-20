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
    public class WalletController :  ApiController
    {
        Food_Delivery_DbEntities db_obj = new Food_Delivery_DbEntities();
        // GET: Wallet
        [HttpGet]
        [ActionName("GetSupplierWalletInfoById")]

        public async Task<IHttpActionResult> GetSupplierWalletInfoById(Decimal id)
        {
            try
            {
                var query = await db_obj.tbl_supplier_wallet.Where(t => t.supplier_id == id).Select(t => new SupplierWallet
                {
                    supplier_wallet_id = t.supplier_wallet_id,
                    wallet_balance = t.wallet_balance ?? 0,
                    last_updated = t.last_updated,

                }).FirstOrDefaultAsync();
                //var query = await db_obj.tbl_supplier_wallet.Where(t => t.supplier_id == id).Include(t => t.tbl_supplier_info).Select(t => new SupplierWallet
                //{
                //    SI = new SupplierInfo()
                //    {
                //        supplier_name = t.tbl_supplier_info.supplier_name,
                //        reg_date = t.tbl_supplier_info.reg_date,
                //    },
                //    supplier_wallet_id = t.supplier_wallet_id,
                //    wallet_balance = t.wallet_balance ?? 0,
                //    last_updated = t.last_updated,

                //}).FirstOrDefaultAsync();
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
                    return BadRequest("Supplier Wallet not Found!!");
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