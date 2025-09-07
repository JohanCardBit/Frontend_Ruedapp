import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Misusuarios } from './misusuarios';

describe('Misusuarios', () => {
  let component: Misusuarios;
  let fixture: ComponentFixture<Misusuarios>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Misusuarios]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Misusuarios);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
