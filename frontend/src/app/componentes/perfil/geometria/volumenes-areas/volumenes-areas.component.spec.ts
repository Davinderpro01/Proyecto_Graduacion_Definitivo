import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolumenesAreasComponent } from './volumenes-areas.component';

describe('VolumenesAreasComponent', () => {
  let component: VolumenesAreasComponent;
  let fixture: ComponentFixture<VolumenesAreasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VolumenesAreasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VolumenesAreasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
