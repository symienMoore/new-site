import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  API_URL = "http://localhost:3000"
  constructor(private http: HttpClient) { }

  getAllPosts() {
    return this.http.get(`${this.API_URL}/posts/all`)
  }

  getPostById(id) {
    return this.http.get(`${this.API_URL}/posts/${id}`)
  }


  addPost(post) {
    return this.http.post('http://localhost:3000/posts/new-post', post)
  }


}
