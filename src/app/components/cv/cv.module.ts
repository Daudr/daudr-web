import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material';

import { CvComponent } from './cv/cv.component';
import { JobsComponent } from './jobs/jobs.component';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule
  ],
  declarations: [CvComponent, JobsComponent],
  exports: [CvComponent, JobsComponent]
})
export class CvModule { }
