import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  routes = [
    {name: 'Portfolio', link: '#portfolio', class: 'left mat-raised-button'},
    {name: 'CV', link: '#cv', class: 'right mat-raised-button'},
    {name: 'Competenze', link: '#competenze', class: 'left mat-raised-button'},
    {name: 'Contatti', link: '#contatti', class: 'right mat-raised-button'}
  ];
  image: string = 'assets/propic/propic.jpg';

  constructor() { }

  ngOnInit() {
  }

}
