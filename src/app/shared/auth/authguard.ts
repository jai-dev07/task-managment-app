import { Injectable } from '@angular/core';
// import { MatSnackBar } from '@angular/material/snack-bar';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  CanActivateChild,
  UrlTree,
} from '@angular/router';
// import { Role } from 'app/constants/user-roles.constants';
import { AuthService } from '../auth/auth.service';
import { Observable } from 'rxjs';
// import { StateStorageService } from './state-storage.service';

@Injectable({
  providedIn: 'root',
 })
export class AuthGuard implements CanActivate {
 
    constructor(private authService:AuthService,private router:Router) {
    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean| Observable<boolean> {
        if(this.authService.isLoggedIn()) {
            return true;
        }
        else {
            this.router.navigateByUrl('/login');
            return false;
        }
        
    }
    
}