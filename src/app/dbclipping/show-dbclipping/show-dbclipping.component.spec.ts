import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDbclippingComponent } from './show-dbclipping.component';

describe('ShowDbclippingComponent', () => {
  let component: ShowDbclippingComponent;
  let fixture: ComponentFixture<ShowDbclippingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowDbclippingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDbclippingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
