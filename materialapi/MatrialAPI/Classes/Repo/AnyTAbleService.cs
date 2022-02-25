using Classes.Models;
using Classes.Services;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Web.Http;

namespace Classes.Repo
{
    public class AnyTAbleService : IAnyTAble
    {
        private readonly AnyDBContext context;
        public AnyTAbleService(AnyDBContext _context)
        {
            this.context = _context;
        }
        public void deleteProduct(int id)
        {
            var obj = context.AnyTables.FirstOrDefault(x => x.Id == id);
            context.Remove(obj);
            context.SaveChanges();
        }

       

        public List<AnyTable> getProducts()
        {
            var list =  context.AnyTables.ToList();
            return list;
        }

        public void postProduct(AnyTable anyTable)
        {
           

            context.AnyTables.Add(anyTable);
            context.SaveChanges();
        }

        public void putProducts(int id,AnyTable anyTable)
        {
            var product = context.AnyTables.FirstOrDefault(c => c.Id == id);

            if(product == null)
                Console.WriteLine("product not found");
            else
            {
               product.ProductName = anyTable.ProductName;
               product.Price = anyTable.Price;
               product.Freshness = anyTable.Freshness;
               product.Date = anyTable.Date;
               product.Comments = anyTable.Comments;
               product.Category = anyTable.Category;
                context.SaveChanges();
            }
            
        }

      
    }
}
