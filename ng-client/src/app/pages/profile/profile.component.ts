import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: any = {};

  constructor(private service: AuthService) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.service.getUserProfile().subscribe(res => {
      console.log(res)
      this.user = res;
      
    });
  };

}
