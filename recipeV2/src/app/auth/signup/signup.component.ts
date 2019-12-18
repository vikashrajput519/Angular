import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private authService : AuthService ) { }

  ngOnInit() {
  }

  onSignup(form : NgForm)
  {
    const email = form.value.email;
    const passwrod = form.value.passwrod;
    this.authService.signupUser(email, passwrod);
  }
}
