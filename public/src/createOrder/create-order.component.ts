import { Component, Inject, OnInit } from "@angular/core";
import { downgradeComponent } from "@angular/upgrade/static";

declare var angular: angular.IAngularStatic;

import { CustomerService } from "../customers/customer.service";
import { OrderService } from "../orders/order.service";
import { ProductService } from "../products/productService";
import { Observable, forkJoin, from } from "rxjs";

import { Customer } from "../customers/customer.interface";

const template = require("./createOrder.html");

@Component({
  selector: "create-order",
  template,
})
export class CreateOrderComponent implements OnInit {
  public title: string = "Create Order";

  public customers: Customer[];
  public products: any[];

  constructor(
    private orderService: OrderService,
    private customerService: CustomerService,
    @Inject("$location") private $location: ng.ILocationService,
    private productService: ProductService
  ) {}

  public newOrder = {
    customerId: null,
    items: [
      {
        productId: null,
        quantity: null,
      },
      {
        productId: null,
        quantity: null,
      },
    ],
  };

  ngOnInit() {
    let productData = from(this.productService.getProducts());
    forkJoin([productData, this.customerService.getCustomers()]).subscribe(
      (data) => {
        this.products = data[0];
        this.customers = data[1];
      }
    );
  }

  postOrder() {
    this.newOrder.items = this.newOrder.items.filter(
      (x) => x.productId !== null
    );

    return this.orderService.postOrder(this.newOrder).then(() => {
      this.$location.path("/orders");
    });
  }
}

angular.module("app").directive(
  "createOrder",
  downgradeComponent({
    component: CreateOrderComponent,
  }) as angular.IDirectiveFactory
);
