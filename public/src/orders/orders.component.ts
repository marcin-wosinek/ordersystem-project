import { Component, Input, OnInit, Inject } from "@angular/core";
import { downgradeComponent } from "@angular/upgrade/static";

declare var angular: angular.IAngularStatic;

import * as _ from "lodash";
import { Observable, forkJoin, from } from "rxjs";

const template = require("./orders.html");

import { CustomerService } from "../customers/customer.service";
import { OrderService } from "./order.service";

import { Customer } from "../customers/customer.interface";
import { Order } from "./order.interface";

@Component({
  selector: "customers",
  template,
})
export class OrdersComponent implements OnInit {
  public orders: Order[];
  public customers: Customer[];
  public title: string = "Orders";

  constructor(
    private orderService: OrderService,
    private customerService: CustomerService,
    @Inject("$location") private $location: any
  ) {}

  ngOnInit() {
    let ordersData = from(this.orderService.getOrders());
    forkJoin([ordersData, this.customerService.getCustomers()]).subscribe(
      (data) => {
        this.orders = data[0];
        this.customers = data[1];
        this.orders.forEach((order: Order) => {
          var customer = _.find(this.customers, (customer: Customer) => {
            return order.customerId === customer.id;
          });
          order.customerName = customer.fullName;
        });
      }
    );
  }

  goToCreateOrder() {
    this.$location.path("/orders/create");
  }
}

angular.module("app").directive(
  "orders",
  downgradeComponent({
    component: OrdersComponent,
  }) as angular.IDirectiveFactory
);
