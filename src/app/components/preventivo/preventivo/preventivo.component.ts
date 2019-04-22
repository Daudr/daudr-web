import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import { PrevDialogComponent } from '../prev-dialog/prev-dialog.component';

@Component({
  selector: 'app-preventivo',
  templateUrl: './preventivo.component.html',
  styleUrls: ['./preventivo.component.css']
})
export class PreventivoComponent implements OnInit {
  arrow_direction = 'keyboard_arrow_right';
  arrow_class = 'arrow';
  preventivo_class = 'preventivo';

  constructor(private dialog: MatDialog) { }

  ngOnInit() { }

  toggleArrow () {
    if (this.arrow_direction === 'keyboard_arrow_right') {
      this.arrow_direction = 'keyboard_arrow_left';
      this.arrow_class = 'arrow arrow-closed';
      this.preventivo_class = 'preventivo-closed';
    } else {
      this.arrow_direction = 'keyboard_arrow_right';
      this.arrow_class = 'arrow';
      this.preventivo_class = 'preventivo';
    }
  }

  openDialog () {
    this.dialog.open(PrevDialogComponent, {
      data: {dialog: this.dialog},
      maxHeight: '80vh'
    });
  }

}
