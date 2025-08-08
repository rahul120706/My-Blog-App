import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HeaderComponent } from './header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import { MatSidenavContainer } from '@angular/material/sidenav';
import { UserLoginComponent } from './user-login/user-login.component';
import { MatSidenav } from '@angular/material/sidenav';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {  ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { SignupComponent } from './signup/signup.component';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule, provideNativeDateAdapter } from '@angular/material/core';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatDividerModule} from '@angular/material/divider';
import { FooterComponent } from './footer/footer.component';  
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { HttpClientModule } from '@angular/common/http';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { LogoutDialogComponent } from './logout-dialog/logout-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { EditProfileDialogComponent } from './edit-profile-dialog/edit-profile-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserLoginComponent,
    SignupComponent,
    FooterComponent,
    BlogDetailComponent,
    UserProfileComponent,
    LogoutDialogComponent,
    EditProfileDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   MatButtonModule,
    MatMenuModule,  
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatSidenavContainer,
    MatSidenav,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCardModule,
    MatExpansionModule,
    MatOptionModule,
    MatSelectModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSlideToggleModule,
    MatDividerModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatDialogModule,
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    provideNativeDateAdapter(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
