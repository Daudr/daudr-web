import { Component, OnInit, OnDestroy } from '@angular/core';
import { SECTIONS, dateSort } from './utils';
import { FirebaseService } from './services/firebase.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  sections = SECTIONS;

  sectionsSubscription: Subscription;

  sitesSubscription: Subscription;

  constructor(private firebase: FirebaseService) { }

  ngOnInit() {
    this.sectionsSubscription = this.firebase.getJobs().subscribe(jobs => {
      this.sections[1].list = jobs.sort(dateSort);
    });

    this.sitesSubscription = this.firebase.getSites().subscribe(sites => {
      this.sections[2].list = sites.sort(dateSort);
    });
  }

  ngOnDestroy() {
    this.sectionsSubscription.unsubscribe();
    this.sitesSubscription.unsubscribe();
  }
}
