import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemasAlgebraComponent } from './problemas-algebra.component';

describe('ProblemasAlgebraComponent', () => {
  let component: ProblemasAlgebraComponent;
  let fixture: ComponentFixture<ProblemasAlgebraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProblemasAlgebraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProblemasAlgebraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
