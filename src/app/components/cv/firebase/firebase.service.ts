import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Job } from '../../../interfaces/interfaces';

@Injectable()
export class FirebaseService {
  jobs: FirebaseListObservable<Job[]>;

  constructor(private db: AngularFireDatabase) {
    this.jobs = this.db.list('/jobs') as FirebaseListObservable<Job[]>;
  }

  getJobs () {
    return this.jobs;
  }

  setJob (job: Job) {
    this.jobs.push(job);
  }
}
