import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddColaboradoresComponent } from './modal-add-colaboradores.component';

describe('ModalAddColaboradoresComponent', () => {
  let component: ModalAddColaboradoresComponent;
  let fixture: ComponentFixture<ModalAddColaboradoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalAddColaboradoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAddColaboradoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
