import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { AuthServiceService } from '../_services/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard  {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(sessionStorage.getItem('auth-token')) {
        return true;
      }
      else
        Swal.fire('You need to be loggedin', '', 'info') 
        return false;

  }
  
}
