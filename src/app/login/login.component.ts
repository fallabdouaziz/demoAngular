import {Component, OnInit} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {UserService} from "../service/user/user.service";
import {Subscription} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    loginForm= this.formBuilder.group({
      username:'',
      password:''
    });
    public isConnected$: Subscription | undefined;

  constructor(private formBuilder: FormBuilder
              ,private userService: UserService
              ,private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const user = this.loginForm.value;
     const isConnected = this.userService.getConnection(user.username, user.password);
     isConnected.toPromise().then((value) => {
         if (value){
             this.router.navigate([''])
                 .then(()=>window.location.reload())
         }
     })

  }
}
