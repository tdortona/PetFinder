using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;

namespace PetFinderBackOffice.Controllers
{
    public class ImagenMascotaController : ApiController
    {
        // GET api/<controller>
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<controller>/5
        public string Get(int id)
        {
            return "value";
        }

        [HttpPost]
        [Route("api/ImagenMascota/FotoEncontrado")]
        public HttpResponseMessage FotoEncontrado()
        {
            var request = HttpContext.Current.Request;
 
            if (Request.Content.IsMimeMultipartContent())
            {
                if (request.Files.Count > 0)
                {
                    var postedFile = request.Files.Get("file");
                    var title = request.Params["title"];
                    string root = HttpContext.Current.Server.MapPath("~/Images");
                    root = root + "/" + postedFile.FileName;
                    postedFile.SaveAs(root);
                    //Save post to DB
                        return Request.CreateResponse(HttpStatusCode.Found, new
                        {
                            error = false,
                            status = "created",
                            path = root
                        });
                     
                }
            }

            return null;
        }

        // PUT api/<controller>/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
        }
    }
}