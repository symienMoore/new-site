import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  loadToken() {
    return localStorage.getItem('authtoken');
  }

  doLogin(user) {
    return this.http.post('https://symi-services.uk.r.appspot.com/users/login', user)
  }

  getUserProfile() {
    return this.http.get('https://symi-services.uk.r.appspot.com/users/profile')
  }
}

