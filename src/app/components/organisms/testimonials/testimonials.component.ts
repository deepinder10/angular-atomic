import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {

  testimonials = [
    {
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
      client_img: 'assets/images/man.svg',
      client_name: '',
      client_pos: ''
    },
    {
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
     sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.sed do eiusmod tempor incididunt ut
     labore et dolore magna aliqua.sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
      client_img: 'assets/images/man.svg',
      client_name: '',
      client_pos: ''
    },
    {
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
      client_img: 'assets/images/man.svg',
      client_name: '',
      client_pos: ''
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
