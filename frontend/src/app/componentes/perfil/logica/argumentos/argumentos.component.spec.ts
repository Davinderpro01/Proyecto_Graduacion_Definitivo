import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArgumentosComponent } from './argumentos.component';

describe('ArgumentosComponent', () => {
  let component: ArgumentosComponent;
  let fixture: ComponentFixture<ArgumentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArgumentosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArgumentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
