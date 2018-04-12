import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbclippingComponent } from './dbclipping.component';

describe('DbclippingComponent', () => {
  let component: DbclippingComponent;
  let fixture: ComponentFixture<DbclippingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbclippingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbclippingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
