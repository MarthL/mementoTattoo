import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  readonly LOGIN_URL;
  readonly TOKEN_KEY;

  constructor(private http: HttpClient, private router: Router) {
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
    Swal.fire({
      title: 'You have been successfully disconnected', 
      icon: 'info',
      confirmButtonText: 'Continue'
    }).then((response) => {
      if(response.isConfirmed) { 
        this.router.navigate(['/']);
      } 
    })
  }

  check() { 
    return sessionStorage.getItem('auth-token');
  }
}
