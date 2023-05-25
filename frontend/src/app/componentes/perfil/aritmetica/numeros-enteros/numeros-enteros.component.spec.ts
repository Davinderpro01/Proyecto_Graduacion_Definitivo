import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumerosEnterosComponent } from './numeros-enteros.component';

describe('NumerosEnterosComponent', () => {
  let component: NumerosEnterosComponent;
  let fixture: ComponentFixture<NumerosEnterosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumerosEnterosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumerosEnterosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
