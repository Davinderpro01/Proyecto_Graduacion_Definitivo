import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinealesCuadraticasComponent } from './lineales-cuadraticas.component';

describe('LinealesCuadraticasComponent', () => {
  let component: LinealesCuadraticasComponent;
  let fixture: ComponentFixture<LinealesCuadraticasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinealesCuadraticasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinealesCuadraticasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
