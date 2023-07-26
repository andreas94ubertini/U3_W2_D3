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
  posts!:Post[]
  constructor( private postSvc:PostService){
    this.postSvc.fetchPosts().then(()=>{
      this.posts = this.postSvc.posts
    })
  }




}
