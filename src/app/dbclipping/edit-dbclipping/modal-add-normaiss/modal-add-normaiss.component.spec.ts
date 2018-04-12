import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddNormaissComponent } from './modal-add-normaiss.component';

describe('ModalAddNormaissComponent', () => {
  let component: ModalAddNormaissComponent;
  let fixture: ComponentFixture<ModalAddNormaissComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalAddNormaissComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAddNormaissComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
