import { Component, Input, OnInit, Output, EventEmitter, OnChanges, SimpleChanges } from "@angular/core";
import { Customer } from '../app.component';

@Component({
  selector: "customer-table",
  templateUrl: "./customerTable.component.html",
  styleUrls: ["./customerTable.component.scss"]
})
export class CustomerTable implements OnInit, OnChanges {
  @Input() customers: Customer[];
  @Output() setSelectedId: EventEmitter<string> = new EventEmitter<string>();
  customerDetails = false;

  constructor() {

  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('parent', changes)
  }

  toggleDetails(customer) {
    this.customerDetails = true;
    this.setSelectedId.emit(customer.id);
    console.log(this.setSelectedId);

  }
}
