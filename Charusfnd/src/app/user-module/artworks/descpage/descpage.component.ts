import { HttpClient } from '@angular/common/http';
import { Component, OnInit,Input } from '@angular/core';
import { User } from '../user';
import { Output,EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserserviceService } from 'src/app/services/userservice.service';
import { map } from 'rxjs';
import { ClientServiceService } from 'src/app/services/client-service.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { FormGroup,FormControl,Validator, Validators, } from '@angular/forms';
import { Token } from '@angular/compiler';
@Component({
  selector: 'app-descpage',
  templateUrl: './descpage.component.html',
  styleUrls: ['./descpage.component.css']
})
//

//
export class DescpageComponent implements OnInit {
  user:any;
  id:string="";
  pid:any;
  loginStatus=false;
  constructor( private location:Location,private router:Router,private activatedRoute:ActivatedRoute,private userData:UserserviceService,private http:HttpClient,private _client:ClientServiceService) {
    if(localStorage.getItem('token'))
    {
      this.loginStatus=true
    }
    else
    {
      this.loginStatus=false
    }






    this.activatedRoute.paramMap.subscribe(res=>{
       this.pid =res.get('id')+"";
      userData.fetchSinglepost(this.pid).subscribe(res=>{
        this.user=res;
        this.saveData.patchValue({
          _id:this.user._id,
          title:this.user.title,
          description:this.user.description,
          category:this.user.category,
          status:this.user.status
        })
      });

    })


    
   

   }

  saveData   = new FormGroup({
    _id:new FormControl('',[Validators.required]),
    title:new FormControl('',[Validators.required]),
    description:new FormControl('',[Validators.required]),
    category:new FormControl('',[Validators.required]),
    status:new FormControl('',[Validators.required])
   })

  refresh(){
    this.router.navigateByUrl('/',{skipLocationChange:true}).then(()=>{
      this.router.navigate([decodeURI(this.location.path())])
    })
   }
 
   
  ngOnInit(): void {
       // console.log(this.user)
  }
  DeletePost(){
  
    
    this._client.DeletePost(this.user.id).subscribe(data=>{
      alert("Deleted!!");
      this.refresh()
    })

  }
  


  onsubmif(saveData:any){
    console.log(saveData.value)
    this._client.EditPost(saveData.value).subscribe(data=>{
      

      
     

    })

  }
 // @Output()  checks = new EventEmitter<boolean>(); 
  //ngAfterViewInit(){
   // this.checks.emit(true);
  //}

}
