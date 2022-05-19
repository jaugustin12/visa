import { Component, Input, OnInit, Output, EventEmitter, OnChanges, SimpleChanges } from "@angular/core";
import { Customer, CustomerDetail } from '../app.component';

@Component({
  selector: "customer-details",
  templateUrl: "./customerDetails.component.html",
  styleUrls: ["./customerDetails.component.scss"]
})
export class CustomerDetails implements OnInit, OnChanges {
  @Input() customerDetailsRecords;
  @Input() customers;
  @Input() selectedId;
  totalCustomer;

  constructor() {}

  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('child', changes);
    console.log('customerDetailsRecords', this.customerDetailsRecords);
    console.log('this.customers', this.customers);
    var selectedCustomerDetailsRecords = this.customerDetailsRecords.filter((customer) => {return customer.id == changes.selectedId.currentValue})
    console.log('selectedCustomerDetailsRecords', selectedCustomerDetailsRecords);
    var selectedCustomer = this.customers.filter((customer) => {return customer.id == changes.selectedId.currentValue})
    console.log('selectedcustomer', selectedCustomer);
    // this.totalCustomer = selectedCustomerDetailsRecords.map((item, i) => Object.assign({}, item, selectedCustomer[i]));
    this.totalCustomer = {id: selectedCustomer[0].id,
      lastName: selectedCustomer[0].lastName,
      firstName: selectedCustomer[0].firstName,
      age: selectedCustomer[0].age,
      city: selectedCustomerDetailsRecords[0].city,
      country: selectedCustomerDetailsRecords[0].country,
      state: selectedCustomerDetailsRecords[0].state,
      gender: selectedCustomerDetailsRecords[0].gender,
      pin: selectedCustomerDetailsRecords[0].pin
    }
    console.log('totalCustomer', this.totalCustomer)
  }

}
