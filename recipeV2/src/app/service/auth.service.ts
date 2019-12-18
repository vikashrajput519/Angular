import { Injectable } from '@angular/core';
import * as frebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  signupUser(email : string, password : string)
  {
    frebase.auth().createUserWithEmailAndPassword(email,password).catch(
      error =>  console.log(error)
      )
  }

}
