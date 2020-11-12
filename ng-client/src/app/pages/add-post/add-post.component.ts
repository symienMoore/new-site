import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Post } from '../../models/Post.model';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  post: Post = new Post();
  invalid: boolean = false;

  constructor(private service: PostService) { }

  ngOnInit(): void {
  }

  addPost() {
    if (this.post.body == null || this.post.title == null || this.post.desc == null || this.post.category == null) {
      this.invalid = true;
      console.log(this.post)
    } else {
      console.log(this.post)
      this.service.addPost(this.post).subscribe(res => {
        console.log(res)
      })
    }
  }
}
