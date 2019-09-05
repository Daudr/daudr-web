import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-propic',
  templateUrl: './propic.component.html',
  styleUrls: ['./propic.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PropicComponent {
  @Input() image: string;
}
