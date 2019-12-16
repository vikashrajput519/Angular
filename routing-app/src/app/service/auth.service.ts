import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
  
export class AuthService {
    
    private loggedIn = false;

    login()
    {
        this.loggedIn = true;
    }
    loggedOff()
    {
        this.loggedIn = false;
    }

    isAuthenticate()
    {
        const promis = new Promise(
            (resolve, reject) => { setTimeout(
                () => {
                    resolve(this.loggedIn);
                }, 800);
            }
        );
        return promis;
    }
}