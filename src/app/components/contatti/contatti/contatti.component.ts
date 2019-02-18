import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contatti',
  templateUrl: './contatti.component.html',
  styleUrls: ['./contatti.component.css']
})
export class ContattiComponent implements OnInit {
  cols = 4;
  firebaseUrl = 'https://firebasestorage.googleapis.com/v0/b/daudr-web.appspot.com';
  contacts = [
    {
      nome: 'Facebook',
      icon:
        this.firebaseUrl + '/o/assets%2Fcontatti%2Ffacebook.png?alt=media&token=2320b360-142f-4a2a-b68c-e2b69a32597b',
      alt: 'Icona Facebook Michele Da Rin',
      link: 'https://www.facebook.com/micheleedarin'
    },
    {
      nome: 'LinkedIn',
      icon:
        this.firebaseUrl + '/o/assets%2Fcontatti%2Flinkedin.png?alt=media&token=15e3e407-e06e-46cb-8ae2-649154bf345f',
      alt: 'Icona LinkedIn Michele Da Rin',
      link: 'https://www.linkedin.com/in/micheleedarin/'
    },
    {
      nome: 'GitHub',
      icon:
        this.firebaseUrl + '/o/assets%2Fcontatti%2Fgithub.png?alt=media&token=4faea584-1588-4a2d-b694-414bf3db16b3',
      alt: 'Icona GitHub Michele Da Rin',
      link: 'https://github.com/Daudr'
    },
    {
      nome: 'ProntoPro',
      icon:
        this.firebaseUrl + '/o/assets%2Fcontatti%2Fprontopro.png?alt=media&token=f6c9227c-b5b8-4068-b1db-be8f38445578',
      alt: 'Icona ProntoPro Michele Da Rin',
      link: 'https://www.prontopro.it/pro/daudr-michele-da-rin'
    },
    {
      nome: 'Email',
      icon:
        this.firebaseUrl + '/o/assets%2Fcontatti%2Femail.png?alt=media&token=8dc1efed-119a-4dad-baba-31ec68c8905f',
      alt: 'Icona Email Michele Da Rin',
      link: 'mailto://michele@daudr.me',
      altro: 'michele@daudr.me'
    },
    {
      nome: 'Cellulare',
      icon:
        this.firebaseUrl + '/o/assets%2Fcontatti%2Fphone.png?alt=media&token=9d2ad9b3-f456-49c2-81f0-9916e123e241',
      alt: 'Icona Telefono Michele Da Rin',
      link: 'tel://+393938405607',
      altro: '+39 3938405607'
    }
  ];

  constructor() {
    if (screen.width < 480) {
      this.cols = 2;
    }
  }

  ngOnInit() {}
}
