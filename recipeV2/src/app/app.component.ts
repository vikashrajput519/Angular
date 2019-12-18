import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'recipe';

  ngOnInit()
  {
    firebase.initializeApp({
      apiKey: "AIzaSyC8RdqqzsrT_UqAluZTN1VhWshVRMjJyM4",
    authDomain: "angular-http-demo-6e774.firebaseapp.com"
    });
  }
}
