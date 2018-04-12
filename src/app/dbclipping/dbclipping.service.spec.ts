import { TestBed, inject } from '@angular/core/testing';

import { DbclippingService } from './dbclipping.service';

describe('DbclippingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DbclippingService]
    });
  });

  it('should be created', inject([DbclippingService], (service: DbclippingService) => {
    expect(service).toBeTruthy();
  }));
});
