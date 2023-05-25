import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreasPerimetrosComponent } from './areas-perimetros.component';

describe('AreasPerimetrosComponent', () => {
  let component: AreasPerimetrosComponent;
  let fixture: ComponentFixture<AreasPerimetrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreasPerimetrosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AreasPerimetrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
