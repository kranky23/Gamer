import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { LoginService } from './login.service';

describe('LoginService', () => {
  let service: LoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,RouterTestingModule]

    });
<<<<<<< HEAD
    service = TestBed.inject(LoginService);
  });
=======
>>>>>>> tmp

    expect(service).toBeTruthy();
  });
});
