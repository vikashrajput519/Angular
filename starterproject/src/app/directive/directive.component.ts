import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {

  private oddNumberArray: number[] = [1, 3, 5, 6, 7];
  private evenNumberArray: number[] = [2, 4, 6, 8, 10];

  private isEvenNumber: boolean = true;
  private text: string = 'Print Odd';


  constructor() { }

  ngOnInit() {
  }

  onButtonClick() {
    this.isEvenNumber = !this.isEvenNumber;
    this.text = this.isEvenNumber ? 'Print Odd' : 'Print Even';
  }

}
