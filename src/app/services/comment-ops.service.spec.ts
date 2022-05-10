import { TestBed } from '@angular/core/testing';
import {HttpClientModule} from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CommentOpsService } from './comment-ops.service';

describe('CommentOpsService', () => {
  let service: CommentOpsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(CommentOpsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
