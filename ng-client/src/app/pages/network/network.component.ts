import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-network',
  templateUrl: './network.component.html',
  styleUrls: ['./network.component.css']
})
export class NetworkComponent implements OnInit {
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
        if (post.category == 'networking') {
          console.log(post)
          this.posts.push(post);
        }
      })
    })
  }

}
