import { TestBed } from '@angular/core/testing';

import { HobbyServiceService } from './hobby-service.service';

describe('HobbyServiceService', () => {
  let service: HobbyServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HobbyServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
