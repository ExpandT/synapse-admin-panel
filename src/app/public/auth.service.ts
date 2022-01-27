import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {LoginForm} from "../interfaces/login-form";
import {LoginResponse} from "../interfaces/login-response";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private readonly httpClient: HttpClient) {}

  login(data: LoginForm): Observable<LoginResponse> {
    const url = `${environment.url}/login/`;

    return this.httpClient.post<LoginResponse>(url, data);
  }

  register(data: LoginForm): Observable<LoginResponse> {
    const url = `${environment.url}/register/`;

    return this.httpClient.post<LoginResponse>(url, data);
  }

  isUserLoggedIn(): boolean {
    return localStorage.getItem('AccessToken') !== null;
  }

}
