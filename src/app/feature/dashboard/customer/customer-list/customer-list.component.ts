import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/@core/services/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  public customerList$: any;
  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.customerList$ = this.customerService.getCustomer();
  }

}
