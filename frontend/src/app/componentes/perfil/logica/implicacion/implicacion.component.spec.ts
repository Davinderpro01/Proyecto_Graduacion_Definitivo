import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImplicacionComponent } from './implicacion.component';

describe('ImplicacionComponent', () => {
  let component: ImplicacionComponent;
  let fixture: ComponentFixture<ImplicacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImplicacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImplicacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
