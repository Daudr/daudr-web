import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Site } from '../../../interfaces/interfaces';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FirebaseService {
  sitesRef: AngularFireList<Site[]>;
  sites: Observable<any>;

  constructor(private db: AngularFireDatabase) {
    this.sitesRef = this.db.list('/sites') as AngularFireList<Site[]>;

    this.sites = this.sitesRef.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
  }

  getSites () {
    return this.sites;
  }

  /*setSite (site: Site) {
    this.sites.push(site);
  }*/
}
