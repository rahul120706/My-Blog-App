import { Component, inject, OnInit, ViewChild  } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { LogoutDialogComponent } from '../logout-dialog/logout-dialog.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
@ViewChild('sidenav') sidenav!: MatSidenav;

  sidenavClose() {
    // Logic after sidenav closes (optional)

    
  }
  constructor(
    private authService: AuthService,
    private router:Router,
    private matDialog: MatDialog,
  ) {}

  isLoggedIn = true;
 
  ngOnInit() {
      this.authService.isLoggedIn$.subscribe(status => {
      this.isLoggedIn = status;
    });
  }

   openConfirmDialog() {
    const dialogRef = this.matDialog.open(LogoutDialogComponent, {
      width: '350px',
      data: {
        message: 'Are you sure you want to Log Out?'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.logout();
        // Perform delete action
        console.log("Confirmed!");
      } else {
        console.log("Cancelled");
      }
    });
  }

   logout() {
    this.authService.logout();
    this.router.navigate(['/userlogin']);
  }
}
