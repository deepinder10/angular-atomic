import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss']
})
export class TextComponent implements OnInit {

  @Input() text = '';
  @Input() fontSize = '1rem';
  @Input() color = '#000';
  @Input() align = 'inherit';
  @Input() margin = '';
  constructor() { }

  ngOnInit() {
  }

}
