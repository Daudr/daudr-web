import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-competenza',
  templateUrl: './competenza.component.html',
  styleUrls: ['./competenza.component.css']
})
export class CompetenzaComponent implements OnInit {
  @Input() competenza: any;
  determinate = 'determinate';

  constructor() { }

  ngOnInit() {
  }

}
