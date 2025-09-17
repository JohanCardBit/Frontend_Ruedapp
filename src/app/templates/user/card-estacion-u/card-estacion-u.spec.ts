import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardEstacionU } from './card-estacion-u';

describe('CardEstacionU', () => {
  let component: CardEstacionU;
  let fixture: ComponentFixture<CardEstacionU>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardEstacionU]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardEstacionU);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
