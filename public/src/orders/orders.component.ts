import { Component, OnInit, Inject } from "@angular/core";
import { Router } from "@angular/router";

import * as _ from "lodash";
import { Observable, forkJoin, from } from "rxjs";

import { CustomerService } from "../customers/customer.service";
import { OrderService } from "./order.service";

import { Customer } from "../customers/customer.interface";
import { Order } from "./order.interface";

@Component({
  selector: "customers",
  templateUrl: "./orders.html",
  styles: ["tr a { cursor: pointer }"],
})
export class OrdersComponent implements OnInit {
  orders: Order[];
  filteredOrders: Order[];
  customers: Customer[];
  title: string = "Orders";

  sortType: string;
  sortReverse: boolean = false;

  constructor(
    private orderService: OrderService,
    private customerService: CustomerService,
    private router: Router
  ) {}

  ngOnInit() {
    let ordersData = from(this.orderService.getOrders());
    forkJoin([ordersData, this.customerService.getCustomers()]).subscribe(
      (data) => {
        this.orders = data[0];
        this.filteredOrders = data[0];
        this.customers = data[1];
        this.orders.forEach((order: Order) => {
          var customer = _.find(this.customers, (customer: Customer) => {
            return order.customerId === customer.id;
          });
          order.customerName = customer.fullName;
        });

        this.sortOrders("id");
      }
    );
  }

  goToCreateOrder() {
    this.router.navigate(["orders/create"]);
  }

  dynamicSort(property) {
    let sortOrder = -1;

    if (this.sortReverse) {
      sortOrder = 1;
    }

    return function (a, b) {
      let result =
        a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;

      return result * sortOrder;
    };
  }

  sortOrders(property) {
    this.sortType = property;
    this.sortReverse = !this.sortReverse;

    this.filteredOrders.sort(this.dynamicSort(property));
  }

  filterOrders(search: string) {
    this.filteredOrders = this.orders.filter((o) =>
      Object.keys(o).some((k) => {
        if (typeof o[k] === "string") {
          return o[k].toLowerCase().includes(search.toLowerCase());
        }
      })
    );
  }
}
