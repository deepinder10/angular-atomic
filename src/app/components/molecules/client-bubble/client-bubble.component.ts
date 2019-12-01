import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-client-bubble',
  templateUrl: './client-bubble.component.html',
  styleUrls: ['./client-bubble.component.scss']
})
export class ClientBubbleComponent implements OnInit {

  @Input() data;
  constructor() { }

  ngOnInit() {
  }

}
