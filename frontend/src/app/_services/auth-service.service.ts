import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  readonly LOGIN_URL;
  readonly TOKEN_KEY;

  constructor(private http: HttpClient, ) {
    this.LOGIN_URL = 'http://localhost:3000/login';
    this.TOKEN_KEY = 'auth-token';
  }
  
  login(email: string, password: string): Observable<any> {
    const body = { email, password };
    return this.http.post(`${this.LOGIN_URL}`, body)
      .pipe(
        tap((response: { token: string }) => {
          const authToken = response.token;
          sessionStorage.setItem(this.TOKEN_KEY, authToken);
        })
      );
  }

  logout() { 
    sessionStorage.clear();
  }

  check() { 
    return sessionStorage.getItem('auth-token');
  }
}
