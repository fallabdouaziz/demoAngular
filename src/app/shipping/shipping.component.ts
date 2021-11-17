import { Component, OnInit } from '@angular/core';
import {CartService} from "../service/cart/cart.service";
import {Observable} from "rxjs";
import {Shipping} from "../interface/shipping";

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {
  shippingCosts=new Observable<any>();
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.shippingCosts=this.cartService.getShippingPrices();
  }

}
