import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'daudr-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {
  @Input() title: string;
  @Input() description: string;
  @Input() right: boolean;

  @Input() first: boolean;
  @Input() last: boolean;

  @Input() lineStyle: 'left-right' | 'right-left';

  constructor() { }

  ngOnInit() {
  }

}
