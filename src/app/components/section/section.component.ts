import { Component, Input } from '@angular/core';
import { Section } from '../../interfaces';

@Component({
  selector: 'daudr-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent {
  @Input() section: Section;

  @Input() right: boolean;

  @Input() first: boolean;
  @Input() last: boolean;
}
