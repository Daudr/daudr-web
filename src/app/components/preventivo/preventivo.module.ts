import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatDialogModule, MatIconModule, MatInputModule, MatFormFieldModule, MatButtonModule } from '@angular/material';

import { PreventivoComponent } from './preventivo/preventivo.component';
import { PrevDialogComponent } from './prev-dialog/prev-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    FormsModule
  ],
  declarations: [PreventivoComponent, PrevDialogComponent],
  exports: [PreventivoComponent],
  entryComponents: [PrevDialogComponent]
})
export class PreventivoModule { }
