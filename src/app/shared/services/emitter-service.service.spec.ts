import { TestBed } from '@angular/core/testing';

import { EmitterServiceService } from './emitter-service.service';

describe('EmitterServiceService', () => {
  let service: EmitterServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmitterServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
