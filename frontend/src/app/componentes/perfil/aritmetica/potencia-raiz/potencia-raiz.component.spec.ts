import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PotenciaRaizComponent } from './potencia-raiz.component';

describe('PotenciaRaizComponent', () => {
  let component: PotenciaRaizComponent;
  let fixture: ComponentFixture<PotenciaRaizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PotenciaRaizComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PotenciaRaizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
