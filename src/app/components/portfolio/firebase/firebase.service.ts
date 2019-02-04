import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Site } from '../../../interfaces/interfaces';
import { Observable } from 'rxjs';

import { map } from 'rxjs/operators';

@Injectable()
export class FirebaseService {
  sitesRef: AngularFireList<any>;
  sites: Observable<any>;

  constructor(private db: AngularFireDatabase) {
    this.sitesRef = this.db.list('sites') as AngularFireList<Site>;

    this.sites = this.sitesRef.valueChanges().pipe(map(changes => changes));
  }

  getSites() {
    return this.sites;
  }

  /*setSite (site: Site) {
    this.sites.push(site);
  }*/
}
