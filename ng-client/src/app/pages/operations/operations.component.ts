import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.css']
})
export class OperationsComponent implements OnInit {
  posts: any = [];
  page = 1;
  pageSize = 9;
  constructor(private service: PostService) { }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    this.service.getAllPosts().subscribe((res) => {
      res.forEach(post => {
        if (post.category == 'operations') {
          console.log(post)
          this.posts.push(post);
        }
      })
    })
  }

}
