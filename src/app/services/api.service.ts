import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  postProduct(data : any){
    return this.http.post<any>("https://crudcrud.com/api/57b6f1dd35544d62ae0bab954652be8d",data);
  }
  getProduct(){
    return this.http.get<any>("https://crudcrud.com/api/57b6f1dd35544d62ae0bab954652be8d");
  }
  putProduct(data : any,id : number){
    return this.http.put<any>("https://crudcrud.com/api/57b6f1dd35544d62ae0bab954652be8d"+id ,data);
  } 
  deleteProduct(id : number){
    return this.http.delete<any>("https://crudcrud.com/api/57b6f1dd35544d62ae0bab954652be8d"+id);
  } 
}
  
