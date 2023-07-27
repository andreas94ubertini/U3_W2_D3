import {Injectable, OnInit} from '@angular/core';
import { Post } from './models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService implements OnInit{

  posts!:Post[]
  activePosts!:Post[]
  inactivePosts!:Post[]
  toShow!:Post[]
  constructor(){}
  ngOnInit(){
    fetch('http://localhost:3000/db')
      .then(res => res.json())
      .then(data  => data['db'].forEach((element:Post) => {
          this.posts.push(element)
        })
      )
      .catch(err => alert(err))
  }
  getPosts():Post[]{
    this.posts = []
    return this.posts
  }


  modifyPost(post:Post){
    post.active = post.active === true ? false : true
    fetch(`http://localhost:3000/db/${post.id}`, {
      method: 'PUT',
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify(post)
    }).then(res => res.json())
    // .then(data => console.log(data)
    // )
  }


  getActivePosts():Post[]{
    this.activePosts = this.posts.filter(post => post.active === true)
    return this.activePosts
  }
  getInactivePosts():Post[]{
    this.inactivePosts = this.posts.filter(el=>el.active===false)
    console.log(this.inactivePosts, 'this')
    return this.inactivePosts
  }
  riceviDati(value:Post){
    console.log(value, 'ricevuto')
  }
getThisPost(post:Post){

}
  }




