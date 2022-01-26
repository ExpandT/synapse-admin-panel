import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  storeToken(token: string): void {
    localStorage.setItem('AccessToken', token);
  }

  getToken(): string | null {
    return localStorage.getItem('AccessToken');
  }

  removeToken(): void {
    localStorage.removeItem('AccessToken');
  }
}
