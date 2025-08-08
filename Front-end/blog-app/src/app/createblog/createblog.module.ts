import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatCardModule} from '@angular/material/card';
import { CreateblogComponent } from './createblog.component';
import { CreateblogRoutingModule } from './createblog.routing.module';
import {  MatFormFieldModule} from '@angular/material/form-field';
import {  MatListModule } from '@angular/material/list';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { WordLimitPipe } from '../word-limit.pipe';

@NgModule({
  declarations: [CreateblogComponent,
    WordLimitPipe,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    CreateblogRoutingModule,
    MatFormFieldModule,
    MatIconModule,
    MatListModule,
    ReactiveFormsModule,
    MatInputModule,
    MatGridListModule,
  ]
})
export class BlogModule {}
