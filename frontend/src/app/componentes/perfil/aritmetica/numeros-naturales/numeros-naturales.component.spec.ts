import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumerosNaturalesComponent } from './numeros-naturales.component';

describe('NumerosNaturalesComponent', () => {
  let component: NumerosNaturalesComponent;
  let fixture: ComponentFixture<NumerosNaturalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumerosNaturalesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumerosNaturalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
