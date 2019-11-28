import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicproject',
  templateUrl: './basicproject.component.html',
  styleUrls: ['./basicproject.component.css']
})
export class BasicProjectComponent implements OnInit {

  printTextData = false;
  
  constructor() { }

  ngOnInit() {
  }

  // printData( text : string)
  // {
  //   this.serverName = text;
  // }

  printData() {
    this.printTextData = true;
  }

  onSearchChange( text: string ): void {  
    
    if(text.length === 0)
    {
      this.printTextData = false;
    }
  }

}
