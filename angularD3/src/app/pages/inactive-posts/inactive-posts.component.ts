import { Component } from '@angular/core';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/post.service';

@Component({
  selector: 'app-inactive-posts',
  templateUrl: './inactive-posts.component.html',
  styleUrls: ['./inactive-posts.component.scss']
})

export class InactivePostsComponent {
  inactivePosts:Post[] = this.getInactivePosts()
  constructor( private postSvc:PostService){}

  getInactivePosts():Post[]{
    // this.postSvc.ngOnInit()
    return this.postSvc.getInactivePosts()
  }
}
