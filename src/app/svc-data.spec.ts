import { TestBed } from '@angular/core/testing';

import { SvcData } from './svc-data';

describe('SvcData', () => {
  let service: SvcData;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SvcData);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
