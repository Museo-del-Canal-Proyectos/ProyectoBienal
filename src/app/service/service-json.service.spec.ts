import { TestBed } from '@angular/core/testing';

import { ServiceJsonService } from './service-json.service';

describe('ServiceJsonService', () => {
  let service: ServiceJsonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceJsonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
