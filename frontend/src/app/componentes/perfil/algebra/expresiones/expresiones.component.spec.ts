import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpresionesComponent } from './expresiones.component';

describe('ExpresionesComponent', () => {
  let component: ExpresionesComponent;
  let fixture: ComponentFixture<ExpresionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpresionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpresionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
