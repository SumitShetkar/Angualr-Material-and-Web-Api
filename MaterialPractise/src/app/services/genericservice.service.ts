import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CRUDoperations } from '../models/crudoperation';

@Injectable({
  providedIn: 'root'
})
export class GenericserviceService<T,ID> implements CRUDoperations<T,ID>  {

  constructor(
    private htttp:HttpClient,
    private baseUrl : string
  ) { }

  add(t: T): Observable<T> {
    return this.htttp.post<T>(this.baseUrl, t);
  }

  update(id: ID, t: T): Observable<T> {
    return this.htttp.put<T>(this.baseUrl + "/" + id,t);
  }

  getById(id: ID): Observable<T> {
    return this.htttp.get<T>(this.baseUrl + "/" + id);
  }

  getAll(): Observable<T[]> {
    return this.htttp.get<T[]>(this.baseUrl)
  }

  delete(id: ID): Observable<any> {
    return this.htttp.delete<T>(this.baseUrl + '/' + id);
  }
}
