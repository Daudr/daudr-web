import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-whoiam',
  templateUrl: './whoiam.component.html',
  styleUrls: ['./whoiam.component.css']
})
export class WhoiamComponent implements OnInit {
  descrizione =
`Michele, 22 anni, studente di Informatica all'Università di Bologna durante il giorno, consulente informatico la sera.\n
Sin da ragazzo ho sempre avuto un'interesse particolare per quanto riguarda i computer e il mondo dell'informatica in generale. Mi ricordo ancora le giornate passate a smanettare con il mio primo computer, dotato di Windows 95.\n
Ho sempre seguito questa mia passione: sia a scuola, scegliendo sempre indirizzi tecnico/informatici finendo a studiare anche all'Università, sia a casa, nel mio piccolo, integrando agli studi nozioni di tecnologie emergenti e mai viste in ambito scolastico.\n
Questo mi ha portato ad avere conoscenze nei più disparati campi dell'IT: dalla semplice programmazione alla sicurezza a livello enterprise.\n
I servizi che offro variano da cliente a cliente, ma quelli in cui sono più ferrato comprendono la progettazione, lo sviluppo e il mantenimento di siti web, servizi che possono essere fatti sia in autonomia che in gruppo.`;

  constructor() { }

  ngOnInit() {
  }

}
