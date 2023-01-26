import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  readonly LOGIN_URL;

  constructor(private http: HttpClient) {
    this.LOGIN_URL = 'http://localhost:3000/login';
  }
  
  login(data: any):Observable<any> { 
    return this.http.post(`${this.LOGIN_URL}`, data)
  }

  logout() { 
    sessionStorage.clear();
  }

  check() { 
    return sessionStorage.getItem('auth-token');
  }
}
