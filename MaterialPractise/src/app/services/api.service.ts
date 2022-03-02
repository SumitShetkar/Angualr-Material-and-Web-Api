import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../models/product';
import { GenericserviceService } from './genericservice.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService extends GenericserviceService<Product,number>{

  constructor(private http:HttpClient) {
    super(http,`${environment.api.baseUrl}/Product`)
   }


  // postproduct(data: any){
  //   return this.http.post<any>("https://localhost:5001/api/Product/",data)
  // }

  // getproduct(){
  //   return this.http.get<any>("https://localhost:5001/api/Product");
  // }

  // putProduct(data:any,id:number)
  // {
  //    return this.http.put<any>("https://localhost:5001/api/Product/"+id,data);
  // }

  // deleteProduct(id:number)
  // {
  //   return this.http.delete<any>("https://localhost:5001/api/Product/"+id);
  // }
}
