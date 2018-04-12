import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddVagasComponent } from './modal-add-vagas.component';

describe('ModalAddVagasComponent', () => {
  let component: ModalAddVagasComponent;
  let fixture: ComponentFixture<ModalAddVagasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalAddVagasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAddVagasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
