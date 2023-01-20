import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtworksComponent } from './user-module/artworks/artworks.component';
import { ContactusComponent } from './user-module/contactus/contactus.component';
import { HomeComponent } from './user-module/home/home.component';
import { DescpageComponent } from './user-module/artworks/descpage/descpage.component';
import { LoginComponent } from './client/login/login.component';
const routes: Routes = [
  {
    component:HomeComponent,
    path:"home"
  },
  {
    component:HomeComponent,
    path:""
  },
  {
    component:ArtworksComponent,
    path:"arts",
    children:[{
      component:DescpageComponent,
      path:'spart/:id'
    }
    ]
  },
  {
    component:ContactusComponent,
    path:"contact"
  },
  {
    component:LoginComponent,
    path:"charulogin",
    children:[{
      component:ArtworksComponent,
      path:"",
    children:[{
      component:DescpageComponent,
      path:'spart/:id'
    }]

    }]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
