import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule, MatGridListModule, MatProgressSpinnerModule } from '@angular/material';

import { CompetenzeComponent } from './competenze/competenze.component';
import { CompetenzaComponent } from './competenza/competenza.component';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatGridListModule,
    MatProgressSpinnerModule
  ],
  declarations: [CompetenzeComponent, CompetenzaComponent],
  exports: [CompetenzeComponent, CompetenzaComponent]
})
export class CompetenzeModule { }
