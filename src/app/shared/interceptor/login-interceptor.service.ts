import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoginInterceptorService implements HttpInterceptor{

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token= localStorage.getItem('token');
    if (token!=null){
      let token_header=req.clone({
        headers: req.headers.set('Authorization', `${token}`)
      });
      return next.handle(token_header);
    } else {
      return next.handle(req);
    }
  }
}
