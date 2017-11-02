import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule, MatChipsModule } from '@angular/material';

import { CompetenzeComponent } from './competenze/competenze.component';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatChipsModule
  ],
  declarations: [CompetenzeComponent],
  exports: [CompetenzeComponent]
})
export class CompetenzeModule { }
