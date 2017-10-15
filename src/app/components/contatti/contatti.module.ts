import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule, MatGridListModule } from '@angular/material';

import { ContattiComponent } from './contatti/contatti.component';
import { ContactsComponent } from './contacts/contacts.component';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatGridListModule
  ],
  declarations: [ContattiComponent, ContactsComponent],
  exports: [ContattiComponent]
})
export class ContattiModule { }
