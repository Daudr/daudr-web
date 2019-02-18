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
  firebaseUrl = 'https://firebasestorage.googleapis.com/v0/b/daudr-web.appspot.com';
  image = this.firebaseUrl + '/o/assets%2Fpropic%2Fpropic.jpg?alt=media&token=cbfd67b2-b9fa-4a72-a0ed-61d222d4a7a2';

  constructor() { }

  ngOnInit() {
  }

}
