import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  doLogin(user) {
    return this.http.post('http://localhost:3030/authentication', user)
  }

  test() {
    return this.http.get('http://localhost:3030/test')
  }
}
