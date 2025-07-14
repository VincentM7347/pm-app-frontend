import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

import { LoginRequest, LoginResponse } from './auth.interface';

const AUTH_API = 'http://localhost:8080/api/auth/';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private http = inject(HttpClient);

  login(credentials: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(AUTH_API + 'login', credentials).pipe(
      tap((response: LoginResponse) => {
        if (response.token) {
          localStorage.setItem('auth-token', response.token);
        }
      })
    );
  }

  public getToken(): string | null {
    return localStorage.getItem('auth-token');
  }

  public isLoggedIn(): boolean {
    return this.getToken() !== null;
  }

  public logout(): void {
    localStorage.removeItem('auth-token');
  }

}
