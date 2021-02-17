import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IEmailSignup, ILogin, ILoginAuth } from './models/auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  headers: HttpHeaders;
  URL_SERVICE: string = environment.url_service;

  constructor(
    private http: HttpClient
  ) {
    this.headers = new HttpHeaders({'Content-type': 'application/json'});
  }

  setLocalStorage({ expiresIn, token }: ILoginAuth) {
    const expiresAt = Date.now() + expiresIn;
    localStorage.setItem('id_token', token);
    localStorage.setItem('expires_at', JSON.stringify(expiresAt) );
  }

  logout() {
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
  }

  public isLoggedIn() {
    const actualTime = new Date();
    return actualTime.getTime() < this.getExpiration();
  }

  public haveToken() {
    const token = localStorage.getItem('id_token');
    return !!token;
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  getExpiration() {
    console.log('expiration')
    const expiration : string = localStorage.getItem('expires_at') || '0';
    console.log('expiration2', expiration)
    // const expiresAt = JSON.parse(expiration);
    return +expiration;
  }

  emailLogin(obj: ILogin) {
    return this.http.post(`${this.URL_SERVICE}/auth/email-login`, obj, { headers: this.headers });
  }

  emailSignup(obj: IEmailSignup) {
    return this.http.post(`${this.URL_SERVICE}/auth/email-signup`, obj, { headers: this.headers });
  }

  protected() {
    return this.http.get(`${this.URL_SERVICE}/auth/protected`, { headers: this.headers });
  }

}