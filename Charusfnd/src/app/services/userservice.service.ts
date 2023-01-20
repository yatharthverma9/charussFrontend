import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { ThisReceiver } from '@angular/compiler';
import { map } from 'rxjs';





@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
url="http://localhost:8083/service/userapi"
url2="http://localhost:8083/service/onlypost"
  constructor(private http:HttpClient) { 
  
  }
  getData()
  {
    return this.http.get(this.url)
  }
 fetchSinglepost(id:string){
  return this.http.get(this.url2+"?id="+id)
 }
}


