import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatCardModule} from '@angular/material/card';
import { MatButton } from '@angular/material/button';
import { CapitalizePipe } from '../capitalize.pipe';
import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [AboutComponent,
  ],
  imports: [
    CommonModule,
    AboutRoutingModule,
    MatCardModule,
    MatButton,
    MatIconModule,
    MatListModule
  ]
})
export class AboutModule {}