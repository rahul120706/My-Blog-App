import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, } from '@angular/forms';
import { ApiService } from '../api.service';
import { LoginPayload } from './login-payload.module';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css'
})
export class UserLoginComponent {
    loginForm: FormGroup;
    
  constructor(private fb: FormBuilder,private apiservice: ApiService,private snackbar:MatSnackBar) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required,]],
      password: ['', [Validators.required,Validators.minLength(6)]],
    });

    apiservice.getMessageFromNode().subscribe({
      next: (response)=>{
        console.log("Message From Node:", response.message);
      }
    })
  }

 
 
  onLogin() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      const loginPayload: LoginPayload = this.loginForm.value;
      this.apiservice.postDataToNode(loginPayload,this.loginForm.value.username);
        this.snackbar.open('Login successful!', 'Close', {
      duration: 3000,         // 3 seconds
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: ['snackbar-success'] // Optional: custom styling
    });
      // Handle login logic here
    }
  }

  get username(){
    return this.loginForm.get('username')!;
  }

  get password(){
    return this.loginForm.get('password')!;
  }
}
