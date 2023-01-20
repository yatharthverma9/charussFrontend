import { Component, importProvidersFrom, OnInit } from '@angular/core';
import { Router } from 'express';
import { RouterModule } from '@angular/router';
import { UserserviceService } from 'src/app/services/userservice.service';
import { ClientServiceService } from 'src/app/services/client-service.service';
import { FormGroup,FormControl,Validators,FormControlName, } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-artworks',
  templateUrl: './artworks.component.html',
  styleUrls: ['./artworks.component.css']
})
export class ArtworksComponent implements OnInit {
  file:any="error";
  formdata:any

  onChange(event:any){
    if(event.target.files.length>0)
    {
      const img = event.target.files[0]
      this.file= img;
      this.formdata = new FormData();
      this.formdata.append("img",img)
    }

  }

 saveData   = new FormGroup({
  title:new FormControl('',[Validators.required]),
  description:new FormControl('',[Validators.required]),
  category:new FormControl('',[Validators.required]),
  status:new FormControl('',[Validators.required])
 })
 
 
  loginStatus:boolean=false;
  user:any
  constructor( private userData:UserserviceService, private _client:ClientServiceService, private aroute:ActivatedRoute) { 
    this.loginStatus=<boolean>this._client.loginStaus;
    console.log(this.loginStatus)


    this.userData.getData().subscribe(data=>{
      this.user=data
    });
  }
check:boolean=true;
  refresh()
  {
    this.userData.getData().subscribe(data=>{
      this.user=data
    });

  }

  navigetto()
  {
    if(this.check)
    {
      this.check=false;
    }
    else{
      this.check=true;
    }

    

  }
  ngOnInit(): void {
    this.check=true;
    
    
  }

  onsubmif(data:any){
    this.formdata.append("title" ,data.value.title)
    this.formdata.append("description" ,data.value.description)
    this.formdata.append("category",data.value.category)
    this.formdata.append("status",data.value.status)
    //this.formdata.append(data.value.title)
   this._client.getSave(this.formdata).subscribe(data=>{
    alert(data.message)
    const model = document.getElementById('exampleModalCenter');
    this.refresh()
    
    
      
    })
    // data.value.img=this.file;
    // console.log(data)
    // this._client.getSave(data.value).subscribe(data=>{
    //   console.log(data)
    // })
  }
 // checks(value:any){
   // this.check=value;
   // console.log("send value :"+value)

  //}/


}
