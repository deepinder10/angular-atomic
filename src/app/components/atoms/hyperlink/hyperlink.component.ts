import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hyperlink',
  templateUrl: './hyperlink.component.html',
  styleUrls: ['./hyperlink.component.scss']
})
export class HyperlinkComponent implements OnInit {

  @Input() text = '';
  @Input() color = '000';
  constructor() { }

  ngOnInit() {
  }

}
