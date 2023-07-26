import {Component, Input} from '@angular/core';
import{PostService} from "../../post.service";
import {Post} from "../../models/post";

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
 constructor(private postSvc:PostService) {
 }
  modifyPost(id:number, body:string, title:string, type:string, active:boolean){
     const data = new Post(id, body, title, type, active)
    this.postSvc.modifyPost(data, id)
}
}
