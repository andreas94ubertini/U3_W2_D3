import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import{PostService} from "../../post.service";
import {Post} from "../../models/post";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit{
  @Output() showPost = new EventEmitter<Post>()
  @Input()postObj!:Post
  @Input() postId!:number
  @Input() postTitle!:string
  @Input() postBody!:string
  @Input() postActive!:boolean
  @Input() postType!:string
  toShow!:Post[]
 constructor(private postSvc:PostService) {
 }
 ngOnInit() {
 }

  modifyPost(data:Post){
     const post:Post = data
    this.postSvc.modifyPost(post)
}

 getThisPost(post:Post){
    this.showPost.emit(post)
 }
}

