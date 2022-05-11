import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { AdminOpsService } from './admin-ops.service';

describe('AdminOpsService', () => {
  let service: AdminOpsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
<<<<<<< HEAD
      imports: [HttpClientTestingModule]
=======
      imports : [HttpClientTestingModule]
>>>>>>> tmp

    });
    service = TestBed.inject(AdminOpsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
