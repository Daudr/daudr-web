import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Job, Site } from '../../interfaces';

@Component({
  selector: 'daudr-section-list',
  templateUrl: './section-list.component.html',
  styleUrls: ['./section-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SectionListComponent {
  @Input() list: Job[] | Site[];
  @Input() title: string;
  @Input() lineStyle: 'right-left' | 'left-right';

  @Input() right: boolean;
  @Input() first: boolean;
  @Input() last: boolean;
}
