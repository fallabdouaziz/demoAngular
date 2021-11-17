import {Injectable} from '@angular/core';
import {Product} from "../../interface/products";
import {HttpClient} from "@angular/common/http";
import {Shipping} from "../../interface/shipping";
import {Observable} from "rxjs";
import {UserService} from "../user/user.service";

@Injectable({
  providedIn: 'root'
})
export class CartService {
items: Product[]= [];
  constructor(private http: HttpClient,private userService:UserService) { }

  addCart(product: Product){
      this.items.push(product);
  }
  getItems(){
    return this.items;
  }
  clearCart(){
      this.items=[];
    return this.items;
  }
  getShippingPrices():Observable<Shipping>{
    return this.http.get<Shipping>('/api/shipping');
  }
}
