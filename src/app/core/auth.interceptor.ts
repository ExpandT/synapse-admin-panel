import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {TokenStorageService} from "./token-storage.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private readonly tokenStorageService: TokenStorageService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const authToken = this.tokenStorageService.getToken();
    let authRequest = request;
    if (authToken !== null) {
      authRequest = this.addTokenToHeader(request, authToken);
    }

    return next.handle(authRequest);
  }

  private addTokenToHeader(request: HttpRequest<any>, token: string): HttpRequest<any> {
    return request.clone({ headers: request.headers.set('Authorization', `Bearer ${token}`) });
  }

}
