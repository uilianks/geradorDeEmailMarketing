import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddAniversariantesComponent } from './modal-add-aniversariantes.component';

describe('ModalAddAniversariantesComponent', () => {
  let component: ModalAddAniversariantesComponent;
  let fixture: ComponentFixture<ModalAddAniversariantesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalAddAniversariantesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAddAniversariantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
