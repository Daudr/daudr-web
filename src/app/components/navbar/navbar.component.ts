import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent {
  firebaseUrl = 'https://firebasestorage.googleapis.com/v0/b/daudr-web.appspot.com';
  image = this.firebaseUrl + '/o/assets%2Fpropic%2Fpropic.jpg?alt=media&token=cbfd67b2-b9fa-4a72-a0ed-61d222d4a7a2';
}
