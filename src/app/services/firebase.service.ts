import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Job, Site } from '../interfaces';
import { map } from 'rxjs/operators';

@Injectable()
export class FirebaseService {

  constructor(private db: AngularFireDatabase) { }

  getJobs() {
    const jobsRef = this.db.list('jobs') as AngularFireList<Job>;

    return jobsRef.valueChanges().pipe(
      map(jobs => jobs)
    );
  }

  getSites() {
    const sitesRef = this.db.list('sites') as AngularFireList<Site>;

    return sitesRef.valueChanges().pipe(
      map(sites => sites)
    );
  }
}
