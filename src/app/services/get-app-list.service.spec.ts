import { TestBed } from '@angular/core/testing';

import { GetAppListService } from './get-app-list.service';

describe('GetAppListService', () => {
  let service: GetAppListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetAppListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});