import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginPayload } from './user-login/login-payload.module';
import { signupPayload } from './signup/signup-payload.module';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Url } from 'url';
import { Observable } from 'rxjs';
import { Blogs } from './blog/blogs';
import { json } from 'stream/consumers';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  constructor(private http: HttpClient,private router: Router,private authservice:AuthService) { }

  getMessageFromNode() {
    return this.http.get<{ message: string }>('http://localhost:3000/api/hello')
  }

  postDataToNode(loginPayload: LoginPayload ,username:string){
    const url = 'http://localhost:3000/api/hello';
     this.http.post<{message: string}>(url,{
      action: 'read',
      data:loginPayload
    }).subscribe({
      next: (res) => {
            // alert('Login successful!');
            console.log('Logged in user:', res);
             
            this.authservice.login(username);
            this.router.navigate(['/home']);
            // Store token or user if needed
          },
          error: (err) => {
            alert(err.error.message || 'Login failed');
          }
    });
  }

  postDataToNodeTOMongo(signupPayload: signupPayload ,url:string){
    
     this.http.post<{message: string}>(url,{
      action: 'create',
      data:signupPayload
    }).subscribe({
      next: (res) => {
            alert('Login successful!');
            console.log('Logged in user:', res);
            // Store token or user if needed
          },
          error: (err) => {
            alert(err.error.message || 'Login failed');
          }
    });
  }
}
