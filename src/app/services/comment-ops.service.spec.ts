import { TestBed } from '@angular/core/testing';

import { CommentOpsService } from './comment-ops.service';

describe('CommentOpsService', () => {
  let service: CommentOpsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommentOpsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
