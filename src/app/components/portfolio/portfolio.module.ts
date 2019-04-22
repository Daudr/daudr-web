import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule, MatProgressSpinnerModule, MatIconModule, MatExpansionModule } from '@angular/material';

import { AngularFireDatabaseModule } from '@angular/fire/database';

import { PortfolioComponent } from './portfolio/portfolio.component';
import { SitesComponent } from './sites/sites.component';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatExpansionModule,
    AngularFireDatabaseModule
  ],
  declarations: [PortfolioComponent, SitesComponent],
  exports: [PortfolioComponent, SitesComponent]
})
export class PortfolioModule { }
