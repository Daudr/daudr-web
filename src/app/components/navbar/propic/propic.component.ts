import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-propic',
  templateUrl: './propic.component.html',
  styleUrls: ['./propic.component.scss']
})
export class PropicComponent {
  @Input() image: string;
}
