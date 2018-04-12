import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddDestaquesComponent } from './modal-add-destaques.component';

describe('ModalAddDestaquesComponent', () => {
  let component: ModalAddDestaquesComponent;
  let fixture: ComponentFixture<ModalAddDestaquesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalAddDestaquesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAddDestaquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
