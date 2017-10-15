import { Component, OnInit } from '@angular/core';

import { FirebaseService } from '../firebase/firebase.service';
import { FirebaseListObservable } from 'angularfire2/database';

import { Job } from '../../../interfaces/interfaces';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  jobs: Job[];

  constructor(private fire: FirebaseService) {
    this.fire.getJobs().subscribe(jobs => {
      this.jobs = jobs.sort((a, b) => {
        if (new Date("01/" + a.periodo.da) > new Date("01/" + b.periodo.a)) {
          return -1;
        } else if (new Date("01/" + a.periodo.da) < new Date("01/" + b.periodo.a)) {
          return 1;
        } else {
          return 0;
        }
      });
    });
  }

  ngOnInit() {
  }

}
