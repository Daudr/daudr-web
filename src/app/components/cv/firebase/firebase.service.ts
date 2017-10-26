import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Job } from '../../../interfaces/interfaces';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FirebaseService {
  jobsRef: AngularFireList<Job[]>;
  jobs: Observable<any>;

  constructor(private db: AngularFireDatabase) {
    this.jobsRef = this.db.list('/jobs') as AngularFireList<Job[]>;

    this.jobs = this.jobsRef.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
  }

  getJobs () {
    return this.jobs;
  }

  /*setJob (job: Job) {
    this.jobs.push(job);
  }*/
}
