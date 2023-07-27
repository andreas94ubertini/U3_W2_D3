import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkWithHref } from '@angular/router';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  toShow!:Post[]
  posts:Post[] = this.getPosts()
  constructor( private postSvc:PostService){}
  getPosts():Post[]{
    this.postSvc.ngOnInit()
    return this.postSvc.getPosts()
  }
  getThisPost(post:Post){
    return this.toShow = this.posts.filter(el => el.id === post.id)
  }
  riceviDati(value:Post){
    console.log(value, 'ricevuto')
    this.posts = this.posts.filter(el => el.id === value.id)
  }
}


