import { TestBed } from '@angular/core/testing';

import { ErrorLogService } from './error-handler.service';
import { HttpClientModule } from '@angular/common/http';

describe('ErrorLogService', () => {
  let service: ErrorLogService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [ErrorLogService],
    });

    service = TestBed.get(ErrorLogService); // * inject service instance
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call logError and set new error on lastError property', () => {
    // arrange
    let error = new Error('error message');
    // * act
    service.logError(error);
    // * assert
    expect(service.getLastError).toBe(error.stack as any);
  });
});
