import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';
import { BlogRoutingModule } from './blog-routing.module';
import {MatCardModule} from '@angular/material/card';
import { MatButton } from '@angular/material/button';
import { CapitalizePipe } from '../capitalize.pipe';

@NgModule({
  declarations: [BlogComponent,
    CapitalizePipe
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    MatCardModule,
    MatButton,
    
  ]
})
export class BlogModule {}
