import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule, MatGridListModule } from '@angular/material';

import { ContattiComponent } from './contatti/contatti.component';
import { ContactsComponent } from './contacts/contacts.component';
import { MapComponent } from './map/map.component';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatGridListModule
  ],
  declarations: [ContattiComponent, ContactsComponent, MapComponent],
  exports: [ContattiComponent]
})
export class ContattiModule { }
