import { TestBed } from '@angular/core/testing';

import { SwagsServiceService } from './swags-service.service';

describe('SwagsServiceService', () => {
  let service: SwagsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SwagsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
