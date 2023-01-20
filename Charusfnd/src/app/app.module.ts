import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UserModuleModule } from './user-module/user-module.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { ClientModule } from './client/client.module';
import { ReactiveFormsModule } from '@angular/forms';
import { TokentInterceptorInterceptor } from './services/tokent-interceptor.interceptor';
import { multicast } from 'rxjs';
import { LoginComponent } from './client/login/login.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    ClientModule,
    BrowserModule,
    AppRoutingModule,
    UserModuleModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [LoginComponent,{
    provide:HTTP_INTERCEPTORS,
    useClass:TokentInterceptorInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
