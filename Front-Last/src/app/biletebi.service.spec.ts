import { TestBed } from '@angular/core/testing';

import { BiletebiService } from './biletebi.service';

describe('BiletebiService', () => {
  let service: BiletebiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BiletebiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
