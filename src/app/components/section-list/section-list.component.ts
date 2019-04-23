import { Component, OnInit, Input } from '@angular/core';
import { Job, Site } from '../../interfaces';

@Component({
  selector: 'daudr-section-list',
  templateUrl: './section-list.component.html',
  styleUrls: ['./section-list.component.scss']
})
export class SectionListComponent implements OnInit {
  @Input() list: Job[] | Site[];
  @Input() title: string;
  @Input() lineStyle: 'right-left' | 'left-right';

  @Input() right: boolean;
  @Input() first: boolean;
  @Input() last: boolean;

  constructor() { }

  ngOnInit() {
  }

}
