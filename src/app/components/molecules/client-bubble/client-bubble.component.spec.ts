import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientBubbleComponent } from './client-bubble.component';

describe('ClientBubbleComponent', () => {
  let component: ClientBubbleComponent;
  let fixture: ComponentFixture<ClientBubbleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientBubbleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientBubbleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
