import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisUsuariosTemplate } from './mis-usuarios';

describe('MisUsuarios', () => {
  let component: MisUsuariosTemplate;
  let fixture: ComponentFixture<MisUsuariosTemplate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MisUsuariosTemplate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MisUsuariosTemplate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
