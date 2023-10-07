import { TestBed } from '@angular/core/testing';

import { ProvideProyectsService } from './provide-proyects.service';

describe('ProvideProyectsService', () => {
  let service: ProvideProyectsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProvideProyectsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
