import { TestBed } from '@angular/core/testing';

import { SkillsServiceService } from './skills-service.service';

describe('SkillsServiceService', () => {
  let service: SkillsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SkillsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
