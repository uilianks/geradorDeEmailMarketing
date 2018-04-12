import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDbclippingComponent } from './edit-dbclipping.component';

describe('EditDbclippingComponent', () => {
  let component: EditDbclippingComponent;
  let fixture: ComponentFixture<EditDbclippingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDbclippingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDbclippingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
