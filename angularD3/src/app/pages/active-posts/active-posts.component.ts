import { Component } from '@angular/core';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/post.service';

@Component({
  selector: 'app-active-posts',
  templateUrl: './active-posts.component.html',
  styleUrls: ['./active-posts.component.scss']
})
export class ActivePostsComponent {
  activePosts:Post[] = this.getActivePosts()
  constructor(private postSvc:PostService){}

  getActivePosts():Post[]{
    console.log(this.activePosts)
    return this.postSvc.getActivePosts()
  }
}
