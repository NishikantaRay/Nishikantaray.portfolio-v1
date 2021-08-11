import { TestBed } from '@angular/core/testing';

import { AboutserviceService } from './aboutservice.service';

describe('AboutserviceService', () => {
  let service: AboutserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AboutserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
