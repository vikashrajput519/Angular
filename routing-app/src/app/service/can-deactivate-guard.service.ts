import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CanDeactivateGuardService implements CanDeactivate<CanComponentDeactive> {

  constructor() { }

  canDeactivate(component : CanComponentDeactive,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot) : Observable<boolean> | Promise<boolean> | boolean
    {
      return component.canDeactive();
    }
}

export interface CanComponentDeactive{
  canDeactive: () => Observable<boolean> | Promise<boolean> | boolean;
}
