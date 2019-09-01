import { Component, OnInit, OnDestroy } from '@angular/core';
import { SECTIONS, dateSort } from './utils';
import { FirebaseService } from './services/firebase.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  sections = SECTIONS;

  private _destroyed$ = new Subject<boolean>();

  constructor(private firebase: FirebaseService) { }

  ngOnInit() {
    this.firebase.getJobs().pipe(takeUntil(this._destroyed$)).subscribe(jobs => {
      this.sections[1].list = jobs.sort(dateSort);
    });

    this.firebase.getSites().pipe(takeUntil(this._destroyed$)).subscribe(sites => {
      this.sections[2].list = sites.sort(dateSort);
    });
  }

  ngOnDestroy() {
    this._destroyed$.next();
  }
}
