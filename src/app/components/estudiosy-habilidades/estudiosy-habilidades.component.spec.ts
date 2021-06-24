import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudiosyHabilidadesComponent } from './estudiosy-habilidades.component';

describe('EstudiosyHabilidadesComponent', () => {
  let component: EstudiosyHabilidadesComponent;
  let fixture: ComponentFixture<EstudiosyHabilidadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstudiosyHabilidadesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstudiosyHabilidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
