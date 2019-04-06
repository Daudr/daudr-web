import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'daudr-section-list',
  templateUrl: './section-list.component.html',
  styleUrls: ['./section-list.component.css']
})
export class SectionListComponent implements OnInit {
  @Input() list: any[];

  constructor() { }

  ngOnInit() {
  }

}
