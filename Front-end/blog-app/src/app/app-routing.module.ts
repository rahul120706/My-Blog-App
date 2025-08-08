import {  NgModule } from '@angular/core';
import { RouterModule, Routes,RouterLink,RouterLinkActive,RouterOutlet } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { AboutComponent } from './about/about.component';
import { authGuard } from './auth.guard';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  { path: '',   redirectTo: '/userlogin', pathMatch: 'full' },
  {path: 'userlogin', component: UserLoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'home', loadChildren: ()=> import('./home/home.module').then((m)=> m.HomeModule)},
  {path: 'blog', loadChildren: ()=> import('./blog/blog.module').then((m)=> m.BlogModule)},
  {path: 'about', loadChildren:()=> import('./about/about.module').then((m)=> m.AboutModule)},
  {path: 'profile', component: UserProfileComponent,canActivate: [authGuard]},
  {path: 'blog/:id', component: BlogDetailComponent,canActivate: [authGuard]},
  {path: 'createblog', loadChildren: ()=> import('./createblog/createblog.module').then((m)=> m.BlogModule),canActivate: [authGuard]},
    {path: 'history', loadChildren:()=> import('./blog-history/blog-history.module').then((m)=> m.BlogHistoryModule)},
      { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
