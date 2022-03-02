import { Observable } from "rxjs";

export interface CRUDoperations<T, ID>{
    add(t: T): Observable<T>;
  update(id: ID, t: T): Observable<T>;
  getById(id: ID): Observable<T>;
  getAll(): Observable<T[]>;
  delete(id: ID): Observable<any>;
}