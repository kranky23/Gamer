import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { GetAppListService } from './get-app-list.service';
import { HttpClientModule } from '@angular/common/http';

describe('GetAppListService', () => {
  let service: GetAppListService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,HttpClientModule]

    });
    service = TestBed.inject(GetAppListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
