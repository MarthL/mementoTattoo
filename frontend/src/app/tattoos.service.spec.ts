import { TestBed } from '@angular/core/testing';

import { TattoosService } from './_services/tattoos.service';

describe('TattoosService', () => {
  let service: TattoosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TattoosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
