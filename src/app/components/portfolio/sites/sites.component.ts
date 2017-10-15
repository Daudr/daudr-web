import { Component, OnInit, Input } from '@angular/core';

import { ICarouselConfig, AnimationConfig } from 'angular4-carousel';

import { Site } from '../../../interfaces/interfaces';

@Component({
  selector: 'app-sites',
  templateUrl: './sites.component.html',
  styleUrls: ['./sites.component.css']
})
export class SitesComponent implements OnInit {
  @Input() site: Site;
  @Input() immagini: any;

  public config: ICarouselConfig = {
    verifyBeforeLoad: true,
    log: false,
    animation: true,
    animationType: AnimationConfig.SLIDE,
    autoplay: true,
    autoplayDelay: 2000,
    stopAutoplayMinWidth: 768
  };

  constructor() { }

  ngOnInit() {
  }

}
