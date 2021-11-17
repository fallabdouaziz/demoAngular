import { Component } from '@angular/core';
import {UserService} from "../service/user/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent {
  isLogged: boolean | undefined;
  constructor(private userService:UserService, private router:Router) {
  }
  ngOnInit(){
    this.isLogged=this.userService.getToken()
  }
  isAdmin(){
    return this.userService.isAdmin();
  }

  logOut() {
    localStorage.removeItem('token');
      this.router.navigate(['/login'])
  }

  logIn() {
    this.router.navigate(['/login'])
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/