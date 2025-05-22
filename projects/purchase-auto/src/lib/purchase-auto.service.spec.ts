import { TestBed } from '@angular/core/testing';

import { PurchaseAutoService } from './purchase-auto.service';

describe('PurchaseAutoService', () => {
  let service: PurchaseAutoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PurchaseAutoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
