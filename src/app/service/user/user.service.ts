import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {catchError, map, tap} from "rxjs/operators";
import jwtDecode from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  getConnection(username:string, password: string):Observable<any>{
    return this.http.post<any>('/api/login', {username:username,
      password: password},{observe: 'response'}
    ).pipe(
        tap((resp) => localStorage.setItem('token', <string>resp.headers.get('Authorization'))),
        map((resp) => {
            let existToken: boolean;
            if (resp && resp.headers.get('Authorization')) {
                existToken = true;
            } else {
                existToken = false
            }
            return existToken;

        }),
        catchError(() => of(false))
    );
  }
  getTest():Observable<string>{
    return this.http.get<string>(' http://localhost:8081/api/users');
  }
  isAdmin(){
    let token= localStorage.getItem(`token`);
    let authorityList: string[]=[];
    if (token!=null){
      let decode: any;
      decode = jwtDecode(token);
      let decodeElement = decode['authorities'];
      decodeElement.forEach((authority: any)  =>
        authorityList.push(authority.authority))
    }
    return authorityList.includes('ROLE_ADMIN');
  }
  isManager(){
    let token= localStorage.getItem(`token`);
    let authorityList: string[]=[];
    if (token!=null){
      let decode: any;
      decode = jwtDecode(token);
      let decodeElement = decode['authorities'];
      decodeElement.forEach((authority: any)  =>
        authorityList.push(authority.authority))
    }
    return authorityList.includes('ROLE_MANAGER');
  }
  isUser(){
    let token= localStorage.getItem(`token`);
    let authorityList: string[]=[];
    if (token!=null){
      let decode: any;
      decode = jwtDecode(token);
      let decodeElement = decode['authorities'];
      decodeElement.forEach((authority: any)  =>
        authorityList.push(authority.authority))
    }
    return authorityList.includes('ROLE_USER');
  }
  getToken(){
      return !!localStorage.getItem('token');
  }
}
