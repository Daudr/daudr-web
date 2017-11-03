import { Component, OnInit } from '@angular/core';

import { Competenza } from '../../../interfaces/interfaces';

@Component({
  selector: 'app-competenze',
  templateUrl: './competenze.component.html',
  styleUrls: ['./competenze.component.css']
})
export class CompetenzeComponent implements OnInit {
  competenze: Competenza[] = [
    { nome: 'Sviluppo Web' },
    { nome: 'HTML5' },
    { nome: 'CSS3' },
    { nome: 'Javascript' },
    { nome: 'Angular' },
    { nome: 'Material Design' },
    { nome: 'MongoDB' },
    { nome: 'PHP' },
    { nome: 'Java' },
    { nome: 'C' },
    { nome: 'C++' },
    { nome: 'Assembly' },
    { nome: 'MySQL' },
    { nome: 'MSSQL' },
    { nome: 'NoSQL' },
    { nome: 'Microsoft Office' },
    { nome: 'Project Managment' },
    { nome: 'Problem Solving' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
