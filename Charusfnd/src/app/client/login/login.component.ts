import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {FormGroup,FormControl,FormControlName,Validator, Validators} from '@angular/forms'
import { ClientServiceService } from 'src/app/services/client-service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  loginForm:any;
  status=false;

  constructor(private _client:ClientServiceService) {
    if(localStorage.getItem("token"))
    {
      this.status=true;
      this._client.loginStaus=true;
    }
   }

  ngOnInit(): void {
    this.loginForm= new FormGroup({
      email:new FormControl('',[Validators.required]),
      password:new FormControl ('',[Validators.required]),
  
    })
  }

  loginfn(){
    this._client.getLogin(this.loginForm.value).subscribe(res=>{
      if(res.status)
      {
        this.status=true
        
        alert("Sucess")
        this._client.loginStaus=true;
        localStorage.setItem('token',res.data.token)
      }
      else{
        alert("Wrong id or password")
      }

    })
  }
}
