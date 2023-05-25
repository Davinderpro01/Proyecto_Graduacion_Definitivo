import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AplicacionIntegralesComponent } from './aplicacion-integrales.component';

describe('AplicacionIntegralesComponent', () => {
  let component: AplicacionIntegralesComponent;
  let fixture: ComponentFixture<AplicacionIntegralesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AplicacionIntegralesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AplicacionIntegralesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
