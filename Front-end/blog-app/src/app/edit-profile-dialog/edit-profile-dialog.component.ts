import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {  MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-profile-dialog',
  templateUrl: './edit-profile-dialog.component.html',
  styleUrl: './edit-profile-dialog.component.css'
})
export class EditProfileDialogComponent {
  blogform!: FormGroup;

    constructor(private fb:FormBuilder,
      private dialogRef: MatDialogRef<EditProfileDialogComponent>,
      @Inject(MAT_DIALOG_DATA) public data:any,
    ){
      this.blogform = fb.group({
        firstname: ['',[Validators.required]],
        lastname: ['',[Validators.required]],
        username: ['',[Validators.required]],
        email: ['',[Validators.required]],
      })

    }

    onSubmit(){
      console.log("form Submitted");
    }
}
