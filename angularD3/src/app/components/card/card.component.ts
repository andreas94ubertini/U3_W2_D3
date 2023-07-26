import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() postId!:number
  @Input() postTitle!:string
  @Input() postBody!:string
  @Input() postActive!:boolean
  @Input() postType!:string
  ngOnInit() {

  }

}
