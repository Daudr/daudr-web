import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material';

import { MusicaComponent } from './/musica/musica.component';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule
  ],
  declarations: [MusicaComponent],
  exports: [MusicaComponent]
})
export class MusicaModule { }
