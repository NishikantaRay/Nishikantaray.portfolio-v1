import { TestBed } from '@angular/core/testing';

import { OpensourceServiceService } from './opensource-service.service';

describe('OpensourceServiceService', () => {
  let service: OpensourceServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpensourceServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
