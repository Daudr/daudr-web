import { Component, Input } from '@angular/core';

@Component({
  selector: 'daudr-section-map',
  templateUrl: './section-map.component.html',
  styleUrls: ['./section-map.component.scss']
})
export class SectionMapComponent {
  @Input() title: string;

  @Input() right: boolean;

  @Input() first: boolean;
  @Input() last: boolean;

  @Input() lineStyle: string;
}
