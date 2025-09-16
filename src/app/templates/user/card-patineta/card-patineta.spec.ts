import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPatineta } from './card-patineta';

describe('CardPatineta', () => {
  let component: CardPatineta;
  let fixture: ComponentFixture<CardPatineta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardPatineta]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardPatineta);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
