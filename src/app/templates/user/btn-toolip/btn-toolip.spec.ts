import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnToolip } from './btn-toolip';

describe('BtnToolip', () => {
  let component: BtnToolip;
  let fixture: ComponentFixture<BtnToolip>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnToolip]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnToolip);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
