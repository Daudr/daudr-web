import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { Job, Site, Contact } from '../interfaces';
import { map, delay, take } from 'rxjs/operators';

@Injectable()
export class FirebaseService {

  constructor(private db: AngularFireDatabase) { }

  getJobs() {
    const jobsRef = this.db.list('jobs') as AngularFireList<Job>;

    return jobsRef.valueChanges().pipe(
      // delay(10000),
      map(jobs => jobs),
      take(1)
    );
  }

  getSites() {
    const sitesRef = this.db.list('sites') as AngularFireList<Site>;

    return sitesRef.valueChanges().pipe(
      // delay(10000),
      map(sites => sites),
      take(1)
    );
  }

  getContacts () {
    const contactsRef = this.db.list('contacts') as AngularFireList<Contact>;

    return contactsRef.valueChanges().pipe(
      // delay(10000),
      map(contacts => contacts),
      take(1)
    );
  }

  getIntroduction () {
    const introductionRef = this.db.object('introduction') as AngularFireObject<string>;

    return introductionRef.valueChanges().pipe(
      // delay(10000),
      map(intro => intro),
      take(1)
    );
  }
}
