import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  sections = [
    {
      title: 'Chi sono',
      description: 'Ciao sono Michele',
      lineStyle: 'right-left'
    },
    {
      title: 'Chi sono 2',
      description: 'Ciao sono Michele 2',
      lineStyle: 'left-right'
    },
    {
      title: 'Chi sono',
      description: 'Ciao sono Michele',
      lineStyle: 'right-left'
    },
    {
      title: 'Chi sono 2',
      description: 'Ciao sono Michele 2',
      lineStyle: 'left-right'
    },
    {
      title: 'Chi sono',
      description: 'Ciao sono Michele',
      lineStyle: 'right-left'
    },
    {
      title: 'Chi sono 2',
      description: 'Ciao sono Michele 2',
      lineStyle: 'left-right'
    },
    {
      title: 'Chi sono',
      description: 'Ciao sono Michele',
      lineStyle: 'right-left'
    },
  ];
  constructor() { }
}
