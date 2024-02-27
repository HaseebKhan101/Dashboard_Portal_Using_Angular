import { Component, OnInit } from '@angular/core';
import {
  FontAwesomeModule,
  FaIconLibrary,
} from '@fortawesome/angular-fontawesome';

import {
  faLocation,
  faShop,
  faBoxes,
  faMoneyBill,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-top-widgets',
  standalone: true,
  templateUrl: './top-widgets.component.html',
  styleUrls: ['./top-widgets.component.scss'],
  imports: [FontAwesomeModule],
})
export class TopWidgetsComponent implements OnInit {
  faLocation = faLocation;
  faShop = faShop;
  faBoxes = faBoxes;
  faMoneyBill = faMoneyBill;

  constructor() {}

  ngOnInit(): void {}
}
