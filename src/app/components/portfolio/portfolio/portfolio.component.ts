import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase/firebase.service';
import { Site } from '../../../interfaces/interfaces';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  sites: Site[];
  immagini: string[];

  constructor(private fire: FirebaseService) {
    this.fire.getSites().subscribe(sites => {
      this.sites = sites.sort((a, b) => {
        if (new Date("01/" + a.periodo.da) > new Date("01/" + b.periodo.a)) {
          return -1;
        } else if (new Date("01/" + a.periodo.da) < new Date("01/" + b.periodo.a)) {
          return 1;
        } else {
          return 0;
        }
      });
      this.immagini = Object.keys(sites[0].immagini).map(key=>sites[0].immagini[key]).map(x => x.substr(0, x.length - 4));
    });
  }

  ngOnInit() {}

}
