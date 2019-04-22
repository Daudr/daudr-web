import { Component, OnInit, OnDestroy } from '@angular/core';
import { FirebaseService } from '../../../services/firebase.service';
import { Site } from '../../../interfaces/interfaces';
import { Subscription } from 'rxjs';
import { dateSort } from '../../../utils';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit, OnDestroy {
  sites: Site[];
  immagini: string[];

  sitesSubscription: Subscription;

  constructor(private fire: FirebaseService) {}

  ngOnInit() {
    this.sitesSubscription = this.fire.getSites().subscribe(sites => {
      this.sites = sites.sort(dateSort);
      this.immagini = Object.keys(sites[0].immagini)
        .map(key => sites[0].immagini[key])
        .map(x => x.substr(0, x.length - 4));
    });
  }

  ngOnDestroy(): void {
    this.sitesSubscription.unsubscribe();
  }
}
