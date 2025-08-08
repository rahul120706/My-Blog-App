import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import { MatButton } from '@angular/material/button';
import { BlogHistoryRoutingModule } from './blog-history-routing.module';
import { BlogHistoryComponent } from './blog-history.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatInput, MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [BlogHistoryComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButton,
    BlogHistoryRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    MatLabel,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class BlogHistoryModule {}
