import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Token } from '@angular/compiler';
@Injectable({
  providedIn: 'root'
})
export class ClientServiceService {

  url='http://localhost:8083/auth/login'
  url2='http://localhost:8083/api/save'
  deletUrl="http://localhost:8083/api/delete";
  editUrl ="http://localhost:8083/api/update"  

  public loginStaus:boolean=false;
  
  constructor(private http:HttpClient) { }
  logout(){
    localStorage.removeItem('token')
  }






  getLogin(data:any)
  {
    return this.http.post<any>(this.url,data)

  }
  getToken(){
    return localStorage.getItem('token')
  }
  getSave(data:any){
    return this.http.post<any>(this.url2,data)
  }
  

  DeletePost(id:string){
    return this.http.post<any>(this.deletUrl,{"id":id})

  }
  EditPost(data:FormData){
    return this.http.post(this.editUrl,data)

  }
}
