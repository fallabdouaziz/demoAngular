import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../../interface/products";
import {tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  public getAll():Observable<Product>{
    return this.http.get<Product>("/api/product/");
  }
  public getProduct(id:number):Observable<Product>{
    return this.http.get<Product>(`/api/product/${id}`);
  }
}
