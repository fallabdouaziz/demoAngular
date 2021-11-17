import {Injectable} from '@angular/core';
import {CanActivate,Router} from '@angular/router';
import {UserService} from "../../service/user/user.service";

@Injectable({
  providedIn: 'root'
})
export class AuhtGuard implements CanActivate {
  constructor(private router: Router) {
  }
  canActivate():boolean {
    let token=localStorage.getItem('token')
    if (token!=null){
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }

  
}
