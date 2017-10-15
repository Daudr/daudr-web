import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-routes',
  templateUrl: './routes.component.html',
  styleUrls: ['./routes.component.css']
})
export class RoutesComponent implements OnInit {
  @Input() route;
  
  constructor() { }

  ngOnInit() {
  }

}
