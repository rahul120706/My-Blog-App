import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface User {
  _id:string
  lastname: string
  username: string;
  email: string;
  firstname: string;
  createdAt: Date;
  bio:string;
  profileImage: string;
  // ... other fields
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
   private baseUrl = 'http://localhost:3000/api/user';
  constructor(private http: HttpClient) { }
  
  getUser(username: string):Observable<User>{
    return this.http.get<User>(`${this.baseUrl}/${username}`);
  }
}
