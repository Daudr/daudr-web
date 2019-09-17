import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { environment } from '../../../environments/.env.dev';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'daudr-section-map',
  templateUrl: './section-map.component.html',
  styleUrls: ['./section-map.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SectionMapComponent {
  @Input() title: string;

  @Input() right: boolean;

  @Input() first: boolean;
  @Input() last: boolean;

  @Input() lineStyle: string;

  constructor (private sanitizer: DomSanitizer) {}

  get mapSrc () {
   return this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ3TVz7H9reUcRC3hebSWJVnY&key=${environment.GOOGLE_MAPS_KEY}`);
  }
}
