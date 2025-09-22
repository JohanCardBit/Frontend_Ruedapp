import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardConfigU } from './card-config-u';

describe('CardConfigU', () => {
  let component: CardConfigU;
  let fixture: ComponentFixture<CardConfigU>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardConfigU]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardConfigU);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
