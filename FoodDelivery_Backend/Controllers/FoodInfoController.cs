using FoodDelivery_Backend.Data;
using FoodDelivery_Backend.Models;
using FoodDelivery_Backend.Models.Common;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;

namespace FoodDelivery_Backend.Controllers
{
    public class FoodInfoController : ApiController
    {
        Food_Delivery_DbEntities db_obj = new Food_Delivery_DbEntities();

        [HttpPost]
        [ActionName("RegisterFoodInfo")]
        public async Task<IHttpActionResult> InsertFoodType([FromBody] FoodInfoModel val)
        {
            try
            {
                var query = await db_obj.tbl_food_type.Where(a => a.food_type_cd == val.foodType.food_type_cd).FirstOrDefaultAsync();
                if (query != null)
                {
                    var model = new tbl_food_info()
                    {
                        food_name = val.food_name,
                        food_img = val.food_img,
                        food_type_cd = val.foodType.food_type_cd,
                        food_qty = val.food_qty,
                        food_description = val.food_description

                    };
                    db_obj.tbl_food_info.Add(model);
                    db_obj.SaveChanges();

                    return Ok("Food Info Successfully Added!!");
                }
                else
                {
                    return BadRequest("Food Info Not Added!!");
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
        [ActionName("GetFoodInfo")]
        public async Task<IHttpActionResult> FetchFoodInfo(int food_id)
        {
            try
            {
                //getting the data from food info table with food id
                var query = await db_obj.tbl_food_info.Where(a => a.food_id == food_id).FirstOrDefaultAsync();

                if (query != null)
                {
                    //query tbl_food_type with the foreign key food_type_cd
                    var query1 = await db_obj.tbl_food_type.Where(a => a.food_type_cd == query.food_type_cd).FirstOrDefaultAsync();
                    var type_obj = new FoodTypeModel()
                    {
                        food_category = query1.food_category,
                        food_type = query1.food_type,
                        food_type_cd = query1.food_type_cd,
                        type_desc = query1.type_desc
                    };

                    var model = new FoodInfoModel()
                    {
                        food_id = query.food_id,
                        food_name = query.food_name,
                        food_img = query.food_img,
                        foodType = type_obj,
                        food_qty = query.food_qty ?? 0, // conversion of nullable decimal to decimal
                        food_description = query.food_description,
                        food_img_paths = GetImagePathFromDB(query.food_img)

                    };

                    return Ok(model);
                }
                else
                {
                    return BadRequest("Food Info Not Found!!");
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
        [ActionName("GetAllFoodInfo")]

        public async Task<IHttpActionResult> GetAllFoodInfo()
        {
            try
            {
                var query = await db_obj.tbl_food_info.ToListAsync();
                if (query != null)
                {
                    var resultModel = new List<FoodInfoModel>();
                    foreach (var item in query)
                    {
                        var query1 = await db_obj.tbl_food_type.Where(a => a.food_type_cd == item.food_type_cd).FirstOrDefaultAsync();
                        var type_obj = new FoodTypeModel()
                        {
                            food_category = query1.food_category,
                            food_type = query1.food_type,
                            food_type_cd = query1.food_type_cd,
                            type_desc = query1.type_desc
                        };

                        var model = new FoodInfoModel()
                        {
                            food_id = item.food_id,
                            food_name = item.food_name,
                            food_img = item.food_img,
                            foodType = type_obj,
                            food_qty = item.food_qty ?? 0, // conversion of nullable decimal to decimal
                            food_description = item.food_description,
                            food_img_paths = GetImagePathFromDB(item.food_img)


                        };
                        resultModel.Add(model);
                    }
                    return Ok(resultModel);
                }
                else
                {
                    return BadRequest("Food Info not Found!!");
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

        private List<string> GetImagePathFromDB(string db_img_path) 
        {
            var baseUrl = $"{Request.RequestUri.Scheme}://{Request.RequestUri.Authority}";
            var imageFolderUrl = baseUrl + "/Images/FoodInfo/";
            var resultUrl = new List<string>();

            if (string.IsNullOrEmpty(db_img_path))
            {
                resultUrl = new List<string>() { imageFolderUrl + "NoImageFound.jpg" };
            }
            else
            {
                //var folderpath = Path.Combine(Directory.GetCurrentDirectory(), "Images/FoodInfo");
                var filenames = db_img_path.Split(',');
                resultUrl = filenames.Select(f => imageFolderUrl + f).ToList();
            }
            return resultUrl;
        }

        [HttpPut]
        [ActionName("UpdateFoodInfo")]

        public async Task<IHttpActionResult> updateFoodInfo([FromBody] FoodInfoModel val)
        {
            try
            {
                var query = await db_obj.tbl_food_info.Where(a => a.food_id == val.food_id).FirstOrDefaultAsync();
                if (query != null)
                {
                    query.food_description = val.food_description;
                    query.food_name = val.food_name;
                    query.food_img = val.food_img;

                    db_obj.SaveChanges();

                    return Ok("Food Info Updated Successfully!!");
                }
                else
                {
                    return BadRequest("Food Info Not Updated!!");
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



        [HttpPost]
        [ActionName("UploadFoodInfoImage")]
        public async Task<IHttpActionResult> UploadFoodInfoImage()
        {
            try
            {
                var root = HttpContext.Current.Server.MapPath("~/Images/FoodInfo");
                Directory.CreateDirectory(root);

                var provider = new MultipartFormDataStreamProvider(root);
                await Request.Content.ReadAsMultipartAsync(provider);
                var metaDataJson = provider.FormData["metadata"];
                var metaData = JsonConvert.DeserializeObject<FileMetaDataModel>(metaDataJson);
                int id = Convert.ToInt32(metaData.PrimaryKey);

                var query = await db_obj.tbl_food_info.Where(a => a.food_id == id).FirstOrDefaultAsync();
                if (query == null) 
                {
                    throw new Exception("Primary Key not found");
                }

                var saveFiles = new List<string>();
                foreach (var item in provider.FileData) 
                {
                    var originalFileName = item.Headers.ContentDisposition.FileName.Trim('"');
                    var extension = Path.GetExtension(originalFileName);
                    //check if the files are img file
                    if (extension == ".jpeg" || extension == ".jpg" || extension == ".png")
                    {
                        var newFileName = $"{metaData.PrimaryKey}_{Guid.NewGuid().ToString()}{extension}";
                        var newFilePath = Path.Combine(root, newFileName);
                        File.Move(item.LocalFileName, newFilePath);
                        saveFiles.Add(newFileName);
                    }

                    else 
                    {
                        if (File.Exists(item.LocalFileName))
                            File.Delete(item.LocalFileName);

                        //return BadRequest("Only .jpg, .jpeg, and .png files are allowed.");
                    }
                    
                }

                query.food_img = query.food_img != null && query.food_img != "" ? string.Concat(query.food_img, ",", string.Join(",", saveFiles)) : string.Join(",", saveFiles);
                db_obj.SaveChanges();
                return Ok("Successfully uploaded");
            }
            catch (Exception e)
            {
                return Content(HttpStatusCode.BadRequest, new ErrorResponse()
                {
                    stackTrace = e.StackTrace,
                    originalExceptionMessage = e.Message,
                    message = "Exception Occurred",
                    innerException = e.InnerException.ToString()
                });
            }
        }

    }
}
