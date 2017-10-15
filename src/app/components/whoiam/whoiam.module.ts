import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule, MatIconModule } from '@angular/material';

import { WhoiamComponent } from './whoiam/whoiam.component';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule
  ],
  declarations: [WhoiamComponent],
  exports: [WhoiamComponent]
})
export class WhoiamModule { }
