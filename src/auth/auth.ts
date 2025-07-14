import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

const AUTH_API = 'http://localhost:8080/api/auth/'; 

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(credentials: any): Observable<any> {
    return this.http.post(AUTH_API + 'login', {
      username: credentials.username,
      password: credentials.password
    }).pipe(
      tap((response: any) => {
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
