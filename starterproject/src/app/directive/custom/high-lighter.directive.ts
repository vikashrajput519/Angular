import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  // For making selector as attribute we generally keep the selector in []
  selector : '[highlighter]'
})
export class HighLighterDirective implements OnInit{
  
  constructor( private elementRef : ElementRef)
  {

  }
 
  ngOnInit() {
    this.elementRef.nativeElement.style.backgroundColor = 'yellow';
  }

}