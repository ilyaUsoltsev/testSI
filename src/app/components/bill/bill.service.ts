import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BillService {
  resultSub = new BehaviorSubject<boolean>(false);
  constructor(private http: HttpClient) { }
  payload = {
    'name': 'morpheus',
    'job': 'leader'
  };
  pay() {
    return this.http.post('https://reqres.in/api/users', this.payload);
  }
  reject() {
    return this.http.post('https://reqres.in/api/users', this.payload);
  }
}
