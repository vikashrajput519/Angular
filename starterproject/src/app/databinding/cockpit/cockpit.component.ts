import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output()
  serverCreated = new EventEmitter<{serverName : string, serverContent : string}>();
  @Output()
  bluePrintCreated = new EventEmitter<{ blueprintName : string, blueprintContent : string}>();
  
  newServerName = '';
  newServerContent = '';

  constructor() { }

  ngOnInit() {
  }
  onAddServer()
  {
    // this.serverElements.push({
    //   type : 'server',
    //   name : this.newServerName,
    //   content : this.newServerContent
    // });
    this.serverCreated.emit({
      serverName : this.newServerName,
      serverContent : this.newServerContent
    });
  }

  onAddBluePrint()
  {
  //   this.serverElements.push({
  //     type : 'blueprint',
  //     name : this.newServerName,
  //     content : this.newServerContent
  //   });
  this.bluePrintCreated.emit({
    blueprintName : this.newServerName,
    blueprintContent : this.newServerContent
  });
  }
}
