import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Product} from "../interface/products";
import {CartService} from "../service/cart/cart.service";
import {ProductService} from "../service/product/product.service";
import {Observable} from "rxjs";
import {UserService} from "../service/user/user.service";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product$: Observable<Product>;

  constructor(
      private route: ActivatedRoute,
      private userService:UserService,
      private cartService: CartService,
      private productService: ProductService) {
    const productId= this.route.snapshot.params.productId;
    this.product$= this.productService.getProduct(productId);
  }

  ngOnInit(): void {
  }

  addCart(product: Product){
    if (this.userService.isAdmin() || this.userService.isManager()){
      this.cartService.addCart(product);
      window.alert('Your product has been added to the cart!');
    } else {
      window.alert("vous pouvez pas ajouter");
    }
  }

}
