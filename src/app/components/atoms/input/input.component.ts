import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  @Input() placeholder = '';
  @Input() width = '100%';
  @Input() type = 'text';
  @Input() formName: FormControl;
  constructor() { }

  ngOnInit() {
  }

}
