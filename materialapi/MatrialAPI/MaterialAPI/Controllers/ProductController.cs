using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Classes.Models;
using Classes.Repo;
using Classes.Services;
using Microsoft.AspNetCore.Mvc;



namespace MaterialAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly IAnyTAble _iAnyTAble;
        public ProductController(IAnyTAble iAnyTAble)
        {
            this._iAnyTAble = iAnyTAble;
        }

        // GET: api/<ProductController>
        [HttpGet]
        public IEnumerable<AnyTable>Get()
        {
            return _iAnyTAble.getProducts();
        }
    
        // POST api/<ProductController>
        [HttpPost]
        public void Post([FromBody] AnyTable anyTable)
        {
            _iAnyTAble.postProduct(anyTable);
        }

        // PUT api/<ProductController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] AnyTable anyTable)
        {
            _iAnyTAble.putProducts(id,anyTable);
        }

        // DELETE api/<ProductController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            _iAnyTAble.deleteProduct(id);
        }
    }
}
