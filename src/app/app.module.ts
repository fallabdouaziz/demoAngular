import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";

import {AppComponent} from './app.component';
import {TopBarComponent} from './top-bar/top-bar.component';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductAlertsComponentComponent} from './product-alerts/product-alerts-component.component';
import {ProductDetailsComponent} from './product-details/product-details.component';
import {CartComponent} from './cart/cart.component';
import {ShippingComponent} from './shipping/shipping.component';
import {LoginComponent} from './login/login.component';
import {AuhtGuard} from "./shared/guard/auht.guard";
import {LoginInterceptorService} from "./shared/interceptor/login-interceptor.service";

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
      HttpClientModule,
    RouterModule.forRoot([
      { path: '',
        component: ProductListComponent,
      canActivate:[AuhtGuard]
      },
      {path : 'products/:productId', component: ProductDetailsComponent},
      {path : 'cart', component: CartComponent},
      {path : 'shipping', component: ShippingComponent},
      {path : 'login', component: LoginComponent}
    ])
  ],
  providers: [AuhtGuard,{
    provide: HTTP_INTERCEPTORS,
    useClass:LoginInterceptorService,
    multi:true
  }],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponentComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent,
    LoginComponent,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/