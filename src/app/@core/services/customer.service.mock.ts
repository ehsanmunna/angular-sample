import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor() { }

  getCustomer() {
    return of([
      {
        "id": 6,
        "created_at": "2023-03-26T18:00:00.000Z",
        "updated_at": "2023-03-26T18:00:00.000Z",
        "name": "Sadiya"
      }]);
  }

  tst(){
    return "hello world";
  }
}
