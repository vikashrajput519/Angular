import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding-home',
  templateUrl: './databinding-home.component.html',
  styleUrls: ['./databinding-home.component.css']
})
export class DatabindingHomeComponent implements OnInit {

  serverElements = [];//{ type : 'server', name : 'Vikash_server',content : 'Test server Component'}

  constructor() { }

  ngOnInit() {
  }

  onServerAdded(serverData : {serverName : string, serverContent : string})
  {
   this.serverElements.push({
     type : 'server',
     name : serverData.serverName,
     content : serverData.serverContent
   });
  }

  onBluePrintAdded(blueprintData : { blueprintName : string, blueprintContent : string})
  {
    this.serverElements.push({
      type : 'blueprint',
      name : blueprintData.blueprintName,
      content : blueprintData.blueprintContent
    });
  }

}
