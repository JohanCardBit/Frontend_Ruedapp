import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Patineta } from './patineta';

describe('Patineta', () => {
  let component: Patineta;
  let fixture: ComponentFixture<Patineta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Patineta]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Patineta);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
