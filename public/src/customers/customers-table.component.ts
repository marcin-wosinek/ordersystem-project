import { Component, Input } from "@angular/core";
import { downgradeComponent } from "@angular/upgrade/static";

declare var angular: angular.IAngularStatic;

import { Customer } from "./customer.interface";

const template = require("./customers-table.html");

@Component({
  selector: "customers-table",
  template,
})
export class CustomersTable {
  @Input() customers: Customer[];

  constructor() {}
}

angular.module("app").directive(
  "customersTable",
  downgradeComponent({
    component: CustomersTable,
  }) as angular.IDirectiveFactory
);
