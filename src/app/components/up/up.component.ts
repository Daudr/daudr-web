import { Component, HostListener, ViewChild, Inject } from '@angular/core';
import { WINDOW } from '../../services/window.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-up',
  templateUrl: './up.component.html',
  styleUrls: ['./up.component.scss'],
})
export class UpComponent {
  isVisible = false;
  fadeOut = false;

  @ViewChild('backToTop', { static: false }) backToTop: HTMLElement;

  constructor(@Inject(DOCUMENT) private document: Document, @Inject(WINDOW) private window: Window) { }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const offset = 300;
    const offsetOpacity = 1200;

    const position = this.window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;

    if (position > offset) {
      this.isVisible = true;
    } else {
      this.isVisible = false;
      this.fadeOut = false;
    }

    if (position > offsetOpacity) {
      this.fadeOut = true;
    }
  }

  scrollTop() {
    this.window.scroll({ top: 0, behavior: 'smooth' });
  }
}
