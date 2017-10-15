import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material';

import { CvComponent } from './cv/cv.component';
import { JobsComponent } from './jobs/jobs.component';
import { FirebaseService } from './firebase/firebase.service';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule
  ],
  declarations: [CvComponent, JobsComponent],
  exports: [CvComponent, JobsComponent],
  providers: [FirebaseService]
})
export class CvModule { }
