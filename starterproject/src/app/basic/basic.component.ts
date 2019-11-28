import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-basic]',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {
  
  isDisabled = true;
  serverCreateMsg = 'Server Not Created!.';
  serverName = "";

  ngOnInit() {
  }
  constructor()
  {
    setTimeout( () => {
      this.isDisabled = false;
    },4000);
  }

  onCreateServer()
  {
    this.serverCreateMsg = 'Server created!!.';
    console.log("Working");
  }

  updateServerName(event : Event)
  {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
