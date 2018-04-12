import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddDbnamidiaComponent } from './modal-add-dbnamidia.component';

describe('ModalAddDbnamidiaComponent', () => {
  let component: ModalAddDbnamidiaComponent;
  let fixture: ComponentFixture<ModalAddDbnamidiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalAddDbnamidiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAddDbnamidiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
