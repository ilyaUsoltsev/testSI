import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  payload = {
    'email': 'eve.holt@reqres.in',
    'password': 'pistol'
  };

  authSub = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) { }

  public login(phone, pass) {
    return this.http.post('https://reqres.in/api/login', this.payload);
  }

}
