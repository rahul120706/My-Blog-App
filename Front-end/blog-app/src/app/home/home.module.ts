import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import { MatButton } from '@angular/material/button';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.model';
import { MatIcon } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButton,
    HomeRoutingModule,
    MatIcon,
    MatListModule,
    
  ]
})
export class HomeModule {}