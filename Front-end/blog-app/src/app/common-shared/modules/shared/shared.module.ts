import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WordLimitPipe } from '../../Pipes/word-limit.pipe';


@NgModule({
  declarations: [WordLimitPipe],

  imports: [
    CommonModule
  ],
  
  exports: [
    WordLimitPipe
  ]
})
export class SharedModule { }
