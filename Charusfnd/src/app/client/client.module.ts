import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserModuleModule, } from '../user-module/user-module.module';
import { ArtworksComponent } from '../user-module/artworks/artworks.component';
@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    ReactiveFormsModule,
    UserModuleModule
  ]
})
export class ClientModule { }
