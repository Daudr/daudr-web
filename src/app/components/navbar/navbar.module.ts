import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatButtonModule} from '@angular/material';

import { NavbarComponent } from './navbar/navbar.component';
import { PropicComponent } from './propic/propic.component';
import { RoutesComponent } from './routes/routes.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule
  ],
  declarations: [
    NavbarComponent,
    PropicComponent,
    RoutesComponent
  ],
  exports: [
    NavbarComponent,
    PropicComponent,
    RoutesComponent
  ]
})
export class NavbarModule { }
