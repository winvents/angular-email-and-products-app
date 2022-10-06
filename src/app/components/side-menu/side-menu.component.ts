import { Component, OnInit } from '@angular/core';
import Constants from 'src/app/shared/constants';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  emails(): string {
    return Constants.URL_LIST_EMAILS;
  }

  products(): string {
    return Constants.URL_LIST_PRODUCTS;
  }

}
