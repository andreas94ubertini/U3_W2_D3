import {Directive, ElementRef, OnInit} from '@angular/core';

@Directive({
  selector: '[appTextDeco]'
})
export class TextDecoDirective implements OnInit{
  constructor(private ref: ElementRef) {}
  ngOnInit(): void {
    console.log(this.ref.nativeElement);
    //this.ref.nativeElement => permette di accedere all'elemento del dom a cui è stata applicata la direttiva, e da lì manipolarlo

    this.ref.nativeElement.style.backgroundColor = 'lightgrey'

  }


}
