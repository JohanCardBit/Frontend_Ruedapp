import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPerfilU } from './card-perfil-u';

describe('CardPerfilU', () => {
  let component: CardPerfilU;
  let fixture: ComponentFixture<CardPerfilU>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardPerfilU]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardPerfilU);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
