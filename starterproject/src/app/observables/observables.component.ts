import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Rx';
import 'rxjs/Rx';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent implements OnInit, OnDestroy {

  numberSubscription : Subscription;

  constructor() { }

  ngOnInit() {
    const myNumber = Observable.interval(1000);
    // For continious counting plz uncomment the below code
    this.numberSubscription = myNumber.subscribe(
       (num : number) => {
         console.log(num);
       }
     );
  }

  ngOnDestroy(): void {
    this.numberSubscription.unsubscribe();
  }
}
