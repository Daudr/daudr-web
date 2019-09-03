import { Component, Input } from '@angular/core';

import { environment } from '../../../environments/.env.dev';

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

  mapSrc = `https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ3TVz7H9reUcRC3hebSWJVnY&key=${environment.GOOGLE_MAPS_KEY}`;
}
