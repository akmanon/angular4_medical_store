import { TestBed, inject } from '@angular/core/testing';

import { GateWayService } from './gate-way.service';

describe('GateWayService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GateWayService]
    });
  });

  it('should be created', inject([GateWayService], (service: GateWayService) => {
    expect(service).toBeTruthy();
  }));
});
