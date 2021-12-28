import { Component, Input, OnInit, Inject } from "@angular/core";
import { downgradeComponent } from "@angular/upgrade/static";

declare var angular: angular.IAngularStatic;

import * as moment from "moment";

import { Customer } from "../customers/customer.interface";

import { OrderService } from "../orders/order.service";
import { AddressService } from "../shared/addressService";

const template = require("./customerDetail.html");

@Component({
  selector: "customer-detail",
  template,
})
export class CustomerDetailComponent implements OnInit {
  title: string = "Customer Detail";
  @Input() customer: Customer;

  address: any;
  orders: any[];

  constructor(
    private addressService: AddressService,
    private orderService: OrderService
  ) {}

  ngOnInit() {
    this.address = this.addressService.getFullAddress(this.customer);
    return this.orderService
      .getOrdersByCustomer(this.customer.id)
      .then((data: any) => {
        this.orders = data;
        this.orders.forEach((order) => {
          order.orderDate = moment(order.orderDate).format("MM/DD/YYYY");
        });
      });
  }

  updateDiscount($event) {
    this.customer.discount = $event.discount;
  }
}

angular.module("app").directive(
  "customerDetail",
  downgradeComponent({
    component: CustomerDetailComponent,
  }) as angular.IDirectiveFactory
);
