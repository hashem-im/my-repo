import { TestBed } from '@angular/core/testing';

import { AboutSVC } from './about-svc';

describe('AboutSVC', () => {
  let service: AboutSVC;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AboutSVC);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
