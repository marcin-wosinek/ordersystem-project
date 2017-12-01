import { Component, Input, OnInit } from "@angular/core";
import { downgradeComponent } from "@angular/upgrade/static";

declare var angular: angular.IAngularStatic;

import { Customer } from "./customer.interface";

const template = require("./customers.html");

import { CustomerService } from "./customer.service";

@Component({
  selector: "customers",
  template,
})
export class CustomersComponent implements OnInit {
  public title: string = "Customers";
  public customers: Customer[];

  constructor(private customerService: CustomerService) {}

  ngOnInit() {
    this.customerService.getCustomers().subscribe((data) => {
      this.customers = data;
    });
  }
}

angular.module("app").directive(
  "customers",
  downgradeComponent({
    component: CustomersComponent,
  }) as angular.IDirectiveFactory
);
