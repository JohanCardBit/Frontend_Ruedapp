import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Estacionar } from './estacionar';

describe('Estacionar', () => {
  let component: Estacionar;
  let fixture: ComponentFixture<Estacionar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Estacionar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Estacionar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
