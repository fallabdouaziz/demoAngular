import {Component} from '@angular/core';
import {ProductService} from "../service/product/product.service";
import {Observable} from "rxjs";
import {Product} from "../interface/products";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = new Observable<any>();
  constructor(private productService:ProductService) { }
  ngOnInit(): void {
    console.log(this.productService.getAll().toPromise().then())
    this.products=this.productService.getAll();
  }

  share() {
    window.alert('The product has been shared!');
  }
  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/