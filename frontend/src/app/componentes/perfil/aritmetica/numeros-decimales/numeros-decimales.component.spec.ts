import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumerosDecimalesComponent } from './numeros-decimales.component';

describe('NumerosDecimalesComponent', () => {
  let component: NumerosDecimalesComponent;
  let fixture: ComponentFixture<NumerosDecimalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumerosDecimalesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumerosDecimalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
