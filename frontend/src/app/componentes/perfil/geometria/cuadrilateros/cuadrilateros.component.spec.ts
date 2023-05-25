import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuadrilaterosComponent } from './cuadrilateros.component';

describe('CuadrilaterosComponent', () => {
  let component: CuadrilaterosComponent;
  let fixture: ComponentFixture<CuadrilaterosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuadrilaterosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuadrilaterosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
