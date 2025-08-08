// auth.service.ts
import { Injectable, Inject } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User, UserService } from './user.service';

@Injectable({ providedIn: 'root' })
export class AuthService {
  // Variabels
 

  private isLoggedInSubject = new BehaviorSubject<boolean>(false);

  constructor(@Inject(PLATFORM_ID) private platformId: Object,private http : HttpClient) {
    if (isPlatformBrowser(this.platformId)) {
      const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
      this.isLoggedInSubject.next(isLoggedIn);
    }
    
    
  }

  get isLoggedIn$() {
    return this.isLoggedInSubject.asObservable();
  }
  
  // For Retrieving Unique UserId Each User Has Which is Mongo,s ObjectId For Per Entry 
   private baseUrl = 'http://localhost:3000/api/user';
   
  getUserId(): Observable<User> {
      const username = localStorage.getItem('username')
      return this.http.get<User>(`${this.baseUrl}/${username}`);
  }

  login(username:string) {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('username',username);
      this.isLoggedInSubject.next(true);
    }
  }

  logout() {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('isLoggedIn');
      this.isLoggedInSubject.next(false);
    }
  }
}
