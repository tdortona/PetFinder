using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using IBM.WatsonDeveloperCloud.Util;
using IBM.WatsonDeveloperCloud.VisualRecognition.v3;
using Newtonsoft.Json.Linq;

namespace PetFinderBackOffice.Controllers
{
    public class ValuesController : ApiController
    {
        private const string versionDate = "2018-03-19";
        private const string apikey = "HY_-KRN409tGl3X4Yp3zrbVxKpLGugfZ5HPr2gsCGMiC";
        private const string endpoint = "https://gateway.watsonplatform.net/visual-recognition/api";

        // GET api/values
        public IHttpActionResult Get()
        {
            List<string> classifierIds = new List<string>();
            classifierIds.Add("DogsBreed_2053415849");
            VisualRecognitionService visualRecognition = new VisualRecognitionService();
            visualRecognition.SetEndpoint(endpoint);
            visualRecognition.VersionDate = "2018-03-19";

            FileStream img;
            img = new FileStream("C:\\Siena\\fran.jpg", FileMode.Open);

            TokenOptions iamAssistantTokenOptions = new TokenOptions()
            {
                IamApiKey = apikey
            };

            visualRecognition.SetCredential(iamAssistantTokenOptions);
            
            var result = visualRecognition.Classify(img, classifierIds: classifierIds);

            JObject jsonResult = JObject.Parse(result.ResponseJson);

            return this.Ok(result);
        }

        // GET api/values/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
        }
    }
}
