import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeometriaAnaliticaComponent } from './geometria-analitica.component';

describe('GeometriaAnaliticaComponent', () => {
  let component: GeometriaAnaliticaComponent;
  let fixture: ComponentFixture<GeometriaAnaliticaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeometriaAnaliticaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeometriaAnaliticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
