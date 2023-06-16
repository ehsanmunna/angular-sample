import { TestBed } from '@angular/core/testing';

import { CustomerService } from './customer.service.mock';
import {  HttpClientModule } from '@angular/common/http';

describe('CustomerService', () => {
  let service: CustomerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(CustomerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
