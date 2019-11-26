import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../servicios/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

    constructor(public auth: AuthService, private router: Router) { 
    }
  
    canActivate(): boolean {
      alert("activating..."+this.auth.authUser);
    const isAuthenticated = (this.auth.authUser === undefined || this.auth.authUser === null ) ? false : true;
    if (!isAuthenticated) {
      this.router.navigate(['']);
    }
    return isAuthenticated;
    }
  }