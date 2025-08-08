import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatCardLgImage } from '@angular/material/card';
import { subscribe } from 'diagnostics_channel';
import { ApiService } from '../api.service';
import { signupPayload } from './signup-payload.module';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
    signupFormArray: FormArray;
    address: FormGroup;
    hidePassword = true;
    hideConfirmPassword = true;

    constructor(private fb: FormBuilder,private apiservice: ApiService){

      
        this.signupFormArray = fb.array([
            this.fb.group({
                firstname: ['',[Validators.required]],
                lastname: ['',[Validators.required]],
                gender: ['', [Validators.required]],
                dob: ['', [Validators.required]],
                address : fb.group({
                street: ['', Validators.required],
                city: ['', Validators.required],
                postalCode: ['', [Validators.required,Validators.pattern(/^\d{6}$/)]],   
            })
            }),
            this.fb.group({
                username: ['',[Validators.required,Validators.minLength(3)]],
                email: ['',[Validators.required,Validators.email]],
                acceptTerms: [false,[Validators.requiredTrue]],
                // subscribe: [false,[Validators.requiredTrue]],
                password: ['',[Validators.required,Validators.minLength(6)]],
                confirmpassword: ['',[Validators.required,Validators.minLength(6)]]
            },{validators: this.passwordValidator}),
          ]);

          this.address = this.signupFormArray.at(0) as FormGroup;
    }

  


    passwordValidator(form:AbstractControl){
      console.log("password Mismatch Running ");
      const password = form.get('password')?.value;
      const confirmPassword = form.get('confirmpassword')?.value;
      // console.log(password);
      if(password!==confirmPassword){
          form.get('confirmpassword')?.setErrors({mismatch: true});
      }else{
        const error  = form.get('confirmpassword')?.errors;
        if(error)
          delete error['mismatch'];
        
          
      }
    }

    

    togglePasswordVisibility(){
        this.hidePassword = !this.hidePassword;
    }

     toggleConfirmPasswordVisibility(){
        this.hideConfirmPassword = !this.hideConfirmPassword;
    }

    // Submit Methods
    onSubmit(){
          if (this.signupFormArray.valid) {
      console.log('Form submitted:', this.signupFormArray.value);
      const formData = {
          ...this.personalInformation.value,
          ...this.accountInfo.value
        };
          const url = 'http://localhost:3000/api/hello';
            this.apiservice.postDataToNodeTOMongo(formData,url);
      }else{
        alert("Form not submitted");
      }
    }

    // getter Methods
    get personalInformation(): FormGroup{
      return this.signupFormArray.at(0) as FormGroup;
    }

    get accountInfo(): FormGroup{
      return this.signupFormArray.at(1) as FormGroup;
    }

    get street(){
      return (this.signupFormArray.at(0).get('address') as FormGroup).get('street');
    }

    get city(){
      return (this.signupFormArray.at(0).get('address') as FormGroup).get('city');
    }

    get postalCode(){
      return (this.signupFormArray.at(0).get('address') as FormGroup).get('postalCode');
    }

  get adress(): FormGroup{
    // console.log(this.address)
    return this.address.get('address') as FormGroup ;
    
  }
}
