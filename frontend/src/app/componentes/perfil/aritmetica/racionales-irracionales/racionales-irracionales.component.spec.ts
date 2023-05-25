import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RacionalesIrracionalesComponent } from './racionales-irracionales.component';

describe('RacionalesIrracionalesComponent', () => {
  let component: RacionalesIrracionalesComponent;
  let fixture: ComponentFixture<RacionalesIrracionalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RacionalesIrracionalesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RacionalesIrracionalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
