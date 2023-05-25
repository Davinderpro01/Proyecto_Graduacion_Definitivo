import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProposicionesComponent } from './proposiciones.component';

describe('ProposicionesComponent', () => {
  let component: ProposicionesComponent;
  let fixture: ComponentFixture<ProposicionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProposicionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProposicionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
