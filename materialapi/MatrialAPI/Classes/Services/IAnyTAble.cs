using Classes.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace Classes.Services
{
    public interface IAnyTAble
    {
        void postProduct(AnyTable anyTable);

        List<AnyTable> getProducts();

        void putProducts(int id,AnyTable anyTable);

        void deleteProduct(int id);
    }
}
