import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-programming',
  templateUrl: './programming.component.html',
  styleUrls: ['./programming.component.css']
})
export class ProgrammingComponent implements OnInit {
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
        if (post.category == 'programming') {
          console.log(post)
          this.posts.push(post);
        }
      })
    })
  }

}
