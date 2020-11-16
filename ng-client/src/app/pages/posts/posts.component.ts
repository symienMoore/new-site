import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any = []
  page = 1;
  pageSize = 9;
  
  constructor(private service: PostService) { }

  ngOnInit(): void {
    this.getPosts()
  }

  getPosts() {
    this.service.getAllPosts().subscribe(res => {
      console.log(res)
      this.posts = res
    })
  }

}
