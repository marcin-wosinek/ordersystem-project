import { Component, OnInit, Inject } from "@angular/core";

import { ActivatedRoute } from "@angular/router";

import * as moment from "moment";

import { Customer } from "../customers/customer.interface";

import { OrderService } from "../orders/order.service";
import { AddressService } from "../shared/addressService";

@Component({
  selector: "customer-detail",
  templateUrl: "./customerDetail.html",
})
export class CustomerDetailComponent implements OnInit {
  title: string = "Customer Detail";
  customer: Customer;

  address: any;
  orders: any[];

  constructor(
    private addressService: AddressService,
    private orderService: OrderService,
    private route: ActivatedRoute
  ) {
    this.route.data.subscribe(({ customer }: { customer: Customer }) => {
      this.customer = customer;
    });
  }

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

  updateDiscount(discount) {
    this.customer.discount = discount;
  }
}
