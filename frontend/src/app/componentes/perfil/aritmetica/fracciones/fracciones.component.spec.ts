import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FraccionesComponent } from './fracciones.component';

describe('FraccionesComponent', () => {
  let component: FraccionesComponent;
  let fixture: ComponentFixture<FraccionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FraccionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FraccionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
