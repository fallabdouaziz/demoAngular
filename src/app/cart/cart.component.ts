import { Component, OnInit } from '@angular/core';
import {CartService} from "../service/cart/cart.service";
import {FormBuilder} from "@angular/forms";
import {UserService} from "../service/user/user.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items=this.cartService.getItems();
  checkoutForm=this.formBuilder.group({
    name:'',
    address: ''
  })
  constructor(
      private userService:UserService,
      private cartService: CartService,
      private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }
  onSubmit(): void{
    if (this.userService.isAdmin()){
      this.items= this.cartService.clearCart();
      window.alert('Your order has been submitted');
      this.checkoutForm.reset();
    }else{
      window.alert("vous avez pas le droit de vider le panier");
    }
  }


}
