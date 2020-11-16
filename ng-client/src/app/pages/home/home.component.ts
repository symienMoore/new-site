import { Component, OnInit } from '@angular/core';
import { GithubService } from '../../services/github.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  repos: any = [];
  date = new Date();
  page = 1;
  pageSize = 5;
  constructor(private service: GithubService) { }

  ngOnInit(): void {
    this.getRes();
  }

  getRes() {
    this.service.getResponse().subscribe(res => {
      this.repos = res;
    })
  }

}
