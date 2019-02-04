import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Job } from '../../../interfaces/interfaces';
import { Observable } from 'rxjs';

import { map } from 'rxjs/operators';

@Injectable()
export class FirebaseService {
  jobsRef: AngularFireList<any>;
  jobs: Observable<any>;

  constructor(private db: AngularFireDatabase) {
    this.jobsRef = this.db.list('/jobs') as AngularFireList<Job>;

    this.jobs = this.jobsRef.valueChanges().pipe(map(changes => changes));
  }

  getJobs() {
    return this.jobs;
  }

  /*setJob (job: Job) {
    this.jobs.push(job);
  }*/
}
