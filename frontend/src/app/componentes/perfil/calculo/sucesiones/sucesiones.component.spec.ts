import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SucesionesComponent } from './sucesiones.component';

describe('SucesionesComponent', () => {
  let component: SucesionesComponent;
  let fixture: ComponentFixture<SucesionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SucesionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SucesionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
