import { TestBed } from '@angular/core/testing';

import { AuhtGuard } from './auht.guard';

describe('AuhtGuard', () => {
  let guard: AuhtGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuhtGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
