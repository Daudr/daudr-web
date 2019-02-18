import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-propic',
  templateUrl: './propic.component.html',
  styleUrls: ['./propic.component.css']
})
export class PropicComponent implements OnInit {
  @Input() image;

  constructor() { }

  ngOnInit() {
  }

}
