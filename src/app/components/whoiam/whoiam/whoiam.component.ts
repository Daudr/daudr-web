import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-whoiam',
  templateUrl: './whoiam.component.html',
  styleUrls: ['./whoiam.component.css']
})
export class WhoiamComponent implements OnInit {
  descrizione = `Michele, 20 anni, studente di Informatica all'Università di Bologna.\n\nSin da ragazzo ho sempre avuto un'interesse particolare per quanto riguarda i siti e il web generale. Questa passione mi ha poi portato a frequentare il corso di Informatica prima all'I.T.I.S. di Lancenigo e poi all'Università di Bologna.\n\nDalle conoscenze apprese durante gli studi sia scolastici che autodidattici sono capace di costruire un sito web di qualsiasi tipo da 0, per ogni esigenza, da un semplice sito portfolio ad un complesso e-commerce utilizzando solo ed esclusivamente le ultime tecnologie sul mercato.\n`;

  constructor() { }

  ngOnInit() {
  }

}
