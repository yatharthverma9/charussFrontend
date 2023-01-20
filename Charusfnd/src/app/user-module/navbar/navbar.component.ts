import { Component, OnInit } from '@angular/core';
import { Routes } from '@angular/router';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { window } from 'rxjs';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ClientServiceService } from 'src/app/services/client-service.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
status:boolean;
  constructor(private _client:ClientServiceService,private router:Router,private location:Location ) {
    if(localStorage.getItem('token'))
    {
      this.status=true;
    }
    else
    {
    this.status=false;
    }
    console.log(this.status)
   }
   refresh(){
    this.router.navigateByUrl('/',{skipLocationChange:true}).then(()=>{
      this.router.navigate([decodeURI(this.location.path())])
    })
   }

  ngOnInit(): void {

  }

  LogOut(){
    this._client.logout();
    this._client.loginStaus=false;
    this.status=false
    this.refresh();
  }
}
