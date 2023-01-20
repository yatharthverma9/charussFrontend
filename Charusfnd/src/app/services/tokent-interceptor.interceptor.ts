import { Injectable,Injector } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ClientServiceService } from './client-service.service';

@Injectable()
export class TokentInterceptorInterceptor implements HttpInterceptor {

  constructor(private injector:Injector) {}


  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let _client = this.injector.get(ClientServiceService)
      let token = _client.getToken();
    let tokenizedReq = request.clone({
      
      setHeaders: {
        Authorization:`Bearer ${token} `
      }
    })
    
    return next.handle(tokenizedReq);
  }
}
