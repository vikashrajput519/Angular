import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-routing-advance',
  templateUrl: './routing-advance.component.html',
  styleUrls: ['./routing-advance.component.css']
})
export class RoutingAdvanceComponent implements OnInit {

  constructor(private router : Router ) { }

  ngOnInit() {
  }

  onClickToNavigate(){
    this.router.navigate(['/basic'])
  }
}
