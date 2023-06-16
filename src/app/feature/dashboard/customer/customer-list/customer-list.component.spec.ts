import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomerListComponent } from './customer-list.component';
import { CustomerService } from 'src/app/@core/services/customer.service';
import { HttpClientModule } from '@angular/common/http';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';

describe('CustomerListComponent', () => {
  let component: CustomerListComponent;
  let fixture: ComponentFixture<CustomerListComponent>;
  let service: CustomerService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerListComponent ],
      imports: [
        HttpClientModule,
        MatListModule,
        MatToolbarModule
      ],
      providers: [CustomerService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerListComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(CustomerService);
    fixture.detectChanges();
  });
  
  it('Mock service should greater than zero and first one is sadiya', (done) => {
    service.getCustomer().subscribe((customer: any) => {
      expect(customer.length).toBeGreaterThan(0);
      expect(customer[0].name).toBe("Sadiya");
      done();
    });
  });

  it('Title should contain "Customer List"', () => {
    const title: HTMLElement = fixture.nativeElement;
    expect(title.textContent).toContain('Customer List');
  });

  it('Button should contain "Add"', () => {
    const buttonElem: HTMLElement = fixture.nativeElement;
    const button = buttonElem.querySelector('button')!;
    expect(button.textContent?.trim()).toEqual('Add');
  });


});
