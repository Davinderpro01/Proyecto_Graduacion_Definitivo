import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InecuacionesComponent } from './inecuaciones.component';

describe('InecuacionesComponent', () => {
  let component: InecuacionesComponent;
  let fixture: ComponentFixture<InecuacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InecuacionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InecuacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
