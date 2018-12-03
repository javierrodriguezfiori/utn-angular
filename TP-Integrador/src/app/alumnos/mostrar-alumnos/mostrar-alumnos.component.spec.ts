import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarAlumnosComponent } from './mostrar-alumnos.component';

describe('MostrarAlumnosComponent', () => {
  let component: MostrarAlumnosComponent;
  let fixture: ComponentFixture<MostrarAlumnosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostrarAlumnosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarAlumnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
