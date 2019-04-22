import { Component, OnInit, OnDestroy } from '@angular/core';

import { FirebaseService } from '../../../services/firebase.service';

import { Job } from '../../../interfaces/interfaces';
import { Subscription } from 'rxjs';
import { dateSort } from '../../../utils';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit, OnDestroy {
  jobs: Job[];
  jobsSubscription: Subscription;

  constructor(private fire: FirebaseService) {}

  ngOnInit() {
    this.jobsSubscription = this.fire.getJobs().subscribe(jobs => {
      this.jobs = jobs.sort(dateSort);
    });
  }

  ngOnDestroy(): void {
    this.jobsSubscription.unsubscribe();
  }
}
