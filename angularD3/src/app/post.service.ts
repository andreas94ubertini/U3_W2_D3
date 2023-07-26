import { Injectable } from '@angular/core';
import { Post } from './models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  posts:Post[] = []
  activePosts:Post[] = []
  inactivePosts:Post[] = []
  constructor(){}

  fetchPosts(){
    fetch('http://localhost:3000/db')
    .then(res => res.json())
    .then(data  => data['db'].forEach((element:Post) => {
      const newPost = new Post(element.id, element.body, element.title, element.type, element.active)
      this.posts.push(newPost)
    })
    )
    .catch(err => alert(err))
  }

  modifyPost(data: Post, id: number){
    fetch(`http://localhost:3000/db/${id}`, {
      method: "PUT", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then(data=>{
      return data.json()
    }).then(res=>{
      console.log(res)
    })
  }

  getPosts():Post[]{
    this.posts = []
    return this.posts
  }
  getActivePosts():Post[]{
    this.fetchPosts()
    this.activePosts = this.posts.filter(el=>el.active)
    console.log(this.activePosts, 'this')
    this.posts = []
    return this.activePosts
  }
  getInactivePosts():Post[]{
    this.fetchPosts()
    this.inactivePosts = this.posts.filter(el=>el.active===false)
    console.log(this.inactivePosts, 'this')
    this.posts = []
    return this.inactivePosts
  }

}
