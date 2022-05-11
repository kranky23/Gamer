import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { InsertgamesService } from './insertgames.service';

describe('InsertgamesService', () => {
  let service: InsertgamesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [HttpClientTestingModule]

    });
    service = TestBed.inject(InsertgamesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
