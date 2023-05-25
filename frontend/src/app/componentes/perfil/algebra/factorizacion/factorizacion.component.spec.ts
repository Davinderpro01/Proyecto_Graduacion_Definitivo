import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactorizacionComponent } from './factorizacion.component';

describe('FactorizacionComponent', () => {
  let component: FactorizacionComponent;
  let fixture: ComponentFixture<FactorizacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FactorizacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FactorizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
