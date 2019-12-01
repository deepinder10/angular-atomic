import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  cardsData = [
    {
      src: 'assets/images/access-denied.svg',
      text: 'Access Issue'
    },
    {
      src: 'assets/images/cloud-database.svg',
      text: 'Cloud Data'
    },
    {
      src: 'assets/images/unauthorized-person.svg',
      text: 'Auth Person'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
