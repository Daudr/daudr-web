import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Site } from '../../../interfaces/interfaces';

@Injectable()
export class FirebaseService {
  sites: FirebaseListObservable<Site[]>;

  constructor(private db: AngularFireDatabase) {
    this.sites = this.db.list('/sites') as FirebaseListObservable<Site[]>;
  }

  getSites () {
    return this.sites;
  }

  setSite (site: Site) {
    this.sites.push(site);
  }
}
