import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/Post.model';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  post: any;

  constructor(
    private service: PostService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getPost()
  }

  async getPost() {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        const id = params.get('id');
        return this.service.getPostById(id);
      })
    ).subscribe((res) => {
      console.log(res)
      this.post = res;
    })
  }

}
