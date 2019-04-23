import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './navbar/navbar.component';
import { PropicComponent } from './propic/propic.component';

@NgModule({
  imports: [CommonModule],
  declarations: [NavbarComponent, PropicComponent],
  exports: [NavbarComponent, PropicComponent],
})
export class NavbarModule { }
