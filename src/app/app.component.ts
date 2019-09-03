import { Component, OnInit, OnDestroy } from '@angular/core';
import { SECTIONS, dateSort } from './utils';
import { FirebaseService } from './services/firebase.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Site, Job, Contact } from './interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  sections = SECTIONS;

  private _destroyed$ = new Subject<boolean>();

  constructor(private firebase: FirebaseService) {}

  ngOnInit() {
    this.firebase
      .getIntroduction()
      .pipe(takeUntil(this._destroyed$))
      .subscribe((intro: string) => {
        this.sections[0].description = intro;
      });

    this.firebase
      .getJobs()
      .pipe(takeUntil(this._destroyed$))
      .subscribe((jobs: Job[]) => {
        this.sections[1].list = jobs.sort(dateSort);
      });

    this.firebase
      .getSites()
      .pipe(takeUntil(this._destroyed$))
      .subscribe((sites: Site[]) => {
        this.sections[2].list = sites.sort(dateSort);
      });

    this.firebase
      .getContacts()
      .pipe(takeUntil(this._destroyed$))
      .subscribe((contacts: Contact[]) => {
        this.sections[3].list = contacts;
      });
  }

  ngOnDestroy() {
    this._destroyed$.next();
  }
}
