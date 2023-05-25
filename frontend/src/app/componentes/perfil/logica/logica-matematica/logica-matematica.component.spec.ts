import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogicaMatematicaComponent } from './logica-matematica.component';

describe('LogicaMatematicaComponent', () => {
  let component: LogicaMatematicaComponent;
  let fixture: ComponentFixture<LogicaMatematicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogicaMatematicaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogicaMatematicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
