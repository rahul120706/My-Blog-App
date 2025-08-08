import { Component, OnInit } from '@angular/core';
import { UserService ,User} from '../user.service';
import { MatDialog } from '@angular/material/dialog';
import { EditProfileDialogComponent } from '../edit-profile-dialog/edit-profile-dialog.component';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(private userservice:UserService,private matdialog: MatDialog){}

  user!: User;
 

defaultPic = 'https://via.placeholder.com/100';

  ngOnInit() {
    const username = localStorage.getItem('username')
    if(username){
      this.userservice.getUser(username).subscribe({
        next: (data)=>{ 
          this.user = data 
          console.log(data);
        },
        error:(err)=>{ console.log(err)}
      })
    }
  }

  editProfile() {
    console.log('Edit profile clicked');
    // Navigate or open modal

    const dialogRef = this.matdialog.open(EditProfileDialogComponent,{
      width: "500px",
      panelClass: 'custom-dialog-container',
      data: null,
    })
  }
  
  // deleteBlog(id: string) {
  //   this.userBlogs = this.userBlogs.filter(blog => blog.id !== id);
  // }
}
