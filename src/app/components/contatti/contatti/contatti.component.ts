import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contatti',
  templateUrl: './contatti.component.html',
  styleUrls: ['./contatti.component.css']
})
export class ContattiComponent implements OnInit {
  cols: number = 4;
  contacts = [
    { nome: 'Facebook', icon: 'assets/contatti/facebook.png', alt: 'Icona Facebook', link: 'https://www.facebook.com/micheleedarin'},
    { nome: 'LinkedIn', icon: 'assets/contatti/linkedin.png', alt: 'Icona LinkedIn', link: 'https://www.linkedin.com/in/micheleedarin/'},
    { nome: 'GitHub', icon: 'assets/contatti/github.png', alt: 'Icona GitHub', link: 'https://github.com/Daudr'},
    { nome: 'Email', icon: 'assets/contatti/email.png', alt: 'Icona Email', link: 'mailto://michele@daudr.me', altro: 'michele@daudr.me'},
    { nome: 'Cellulare', icon: 'assets/contatti/phone.png', alt: 'Icona Facebook', link: 'tel://+393938405607', altro: '+39 3938405607'}
  ];

  constructor() {
    if (screen.width < 480) {
      this.cols = 2;
    }
  }

  ngOnInit() {
  }

}
