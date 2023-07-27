import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appShowDetails]'
})
export class ShowDetailsDirective {

  constructor(
    private ref: ElementRef
  ) { }

  @HostListener('click') onClick(){



  }
}
