import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  email: ''
  password: ''
  invalidForm: Boolean = false;

  constructor(
    private service: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  login() {
    const user = {
      strategy: 'local',
      email: this.email,
      password: this.password
    }
    if (user.email == null || user.email == undefined && user.password == null || user.password == undefined) {
      this.invalidForm = true;
    } else {
      this.service.doLogin(user).subscribe(res => {
        localStorage.setItem('authtoken', res['token']);
        this.router.navigate(['/profile']);
        console.log(res);
      })
      this.router.navigate(['profile'])
    }
  }

}
