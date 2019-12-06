import { Directive, Renderer2, OnInit, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[appHighLighterMethod]'
})
export class HighLighterDirective implements OnInit{

  constructor(private eleRef : ElementRef, private renderar : Renderer2) { }
 
  ngOnInit() {
    // To do this is not working at all 
  this.renderar.setStyle(this.eleRef.nativeElement,'background-color','blue');
  }
}
