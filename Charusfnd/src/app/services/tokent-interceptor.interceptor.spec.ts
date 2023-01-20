import { TestBed } from '@angular/core/testing';

import { TokentInterceptorInterceptor } from './tokent-interceptor.interceptor';

describe('TokentInterceptorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      TokentInterceptorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: TokentInterceptorInterceptor = TestBed.inject(TokentInterceptorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
