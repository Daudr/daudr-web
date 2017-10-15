import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-competenze',
  templateUrl: './competenze.component.html',
  styleUrls: ['./competenze.component.css']
})
export class CompetenzeComponent implements OnInit {
  competenze = [
    { nome: 'HTML5', percentuale: 90 },
    { nome: 'CSS3', percentuale: 80 },
    { nome: 'Javascript', percentuale: 70 },
    { nome: 'Angular', percentuale: 80 },
    { nome: 'Material Design', percentuale: 75},
    { nome: 'Java', percentuale: 60},
    { nome: 'C', percentuale: 50 },
    { nome: 'Assembly', percentuale: 30 }
  ]
  constructor() { }

  ngOnInit() {
  }

}
