import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAlquilerActivo } from './card-alquiler-activo';

describe('CardAlquilerActivo', () => {
  let component: CardAlquilerActivo;
  let fixture: ComponentFixture<CardAlquilerActivo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardAlquilerActivo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardAlquilerActivo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
