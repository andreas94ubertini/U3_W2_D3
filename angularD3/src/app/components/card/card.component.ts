import {Component, Input, Output, EventEmitter} from '@angular/core';
import{PostService} from "../../post.service";
import {Post} from "../../models/post";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input()postObj!:Post
  @Input() postId!:number
  @Input() postTitle!:string
  @Input() postBody!:string
  @Input() postActive!:boolean
  @Input() postType!:string
 constructor(private postSvc:PostService) {
 }
  modifyPost(data:Post){
     const post:Post = data
    this.postSvc.modifyPost(post)
}

}

