import { TestBed } from '@angular/core/testing';

import { EduServiceService } from './edu-service.service';

describe('EduServiceService', () => {
  let service: EduServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EduServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
