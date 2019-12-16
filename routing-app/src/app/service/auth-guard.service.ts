import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { Route } from '@angular/compiler/src/core';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private authService : AuthService, private route : Router ) { }

  canActivate(route : ActivatedRouteSnapshot, state : RouterStateSnapshot) : Observable <boolean> | Promise<boolean> | boolean {

    return this.authService.isAuthenticate().then(
      (authenticated : boolean ) => {
        if(authenticated)
        {
          return true;
        }
        else{
          return this.route.navigate(['/']);
        }
      }
    );
  }
}
