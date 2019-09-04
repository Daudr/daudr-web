import { Component, OnInit, OnDestroy } from '@angular/core'
import { SECTIONS, dateSort } from './utils'
import { FirebaseService } from './services/firebase.service'
import { Subject, forkJoin, of } from 'rxjs'
import { takeUntil, catchError } from 'rxjs/operators'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  sections = SECTIONS

  intro$ = this.firebase.getIntroduction();
  jobs$ = this.firebase.getJobs();
  sites$ = this.firebase.getSites();
  contacts$ = this.firebase.getContacts();

  private _destroyed$ = new Subject<boolean>();

  constructor(private firebase: FirebaseService) {}

  ngOnInit() {
    forkJoin({
      intro: this.intro$,
      jobs: this.jobs$,
      sites: this.sites$,
      contacts: this.contacts$,
    })
      .pipe(
        takeUntil(this._destroyed$),
        catchError(error => of(error))
      )
      .subscribe(({ intro, jobs, sites, contacts }) => {
        this.sections[0].description = intro;
        this.sections[1].list = jobs.sort(dateSort);
        this.sections[2].list = sites.sort(dateSort);
        this.sections[3].list = contacts;
      });
  }

  ngOnDestroy() {
    this._destroyed$.next();
  }
}
