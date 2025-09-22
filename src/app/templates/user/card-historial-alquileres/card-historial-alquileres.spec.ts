import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardHistorialAlquileres } from './card-historial-alquileres';

describe('CardHistorialAlquileres', () => {
  let component: CardHistorialAlquileres;
  let fixture: ComponentFixture<CardHistorialAlquileres>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardHistorialAlquileres]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardHistorialAlquileres);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
