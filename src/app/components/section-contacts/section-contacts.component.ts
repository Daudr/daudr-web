import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Contact } from '../../interfaces';

@Component({
  selector: 'daudr-section-contacts',
  templateUrl: './section-contacts.component.html',
  styleUrls: ['./section-contacts.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SectionContactsComponent {
  @Input() list: Contact[];
  @Input() title: string;
  @Input() lineStyle: 'right-left' | 'left-right';

  @Input() right: boolean;

  @Input() first: boolean;
  @Input() last: boolean;
}
