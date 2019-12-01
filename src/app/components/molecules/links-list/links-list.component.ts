import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-links-list',
  templateUrl: './links-list.component.html',
  styleUrls: ['./links-list.component.scss']
})
export class LinksListComponent implements OnInit {

  links = [
    {
      name: 'About',
      href: ''
    },
    {
      name: 'Services',
      href: ''
    },
    {
      name: 'Solutions',
      href: ''
    },
    {
      name: 'Blog',
      href: ''
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
