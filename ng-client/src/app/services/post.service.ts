import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  API_URL = "https://symi-services.uk.r.appspot.com";
  test_url = 'http://localhost:3030';
  
  constructor(private http: HttpClient) { }

  getAllPosts() {
    return this.http.get<any[]>(`${this.API_URL}/posts/all`)
  }

  getPostById(id) {
    return this.http.get(`${this.API_URL}/posts/${id}`)
  }


  addPost(post) {
    return this.http.post(`${this.API_URL}/posts/new-post`, post)
  }


}
