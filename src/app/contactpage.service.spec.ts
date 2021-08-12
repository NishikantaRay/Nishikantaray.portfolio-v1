import { TestBed } from '@angular/core/testing';

import { ContactpageService } from './contactpage.service';

describe('ContactpageService', () => {
  let service: ContactpageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactpageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
