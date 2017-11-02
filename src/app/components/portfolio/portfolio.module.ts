import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule, MatProgressSpinnerModule, MatIconModule, MatExpansionModule } from '@angular/material';

import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FirebaseService } from './firebase/firebase.service';

// import { CarouselModule } from 'angular4-carousel';

import { PortfolioComponent } from './portfolio/portfolio.component';
import { SitesComponent } from './sites/sites.component';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatExpansionModule,
    AngularFireDatabaseModule,
    // CarouselModule
  ],
  declarations: [PortfolioComponent, SitesComponent],
  exports: [PortfolioComponent, SitesComponent],
  providers: [FirebaseService]
})
export class PortfolioModule { }
