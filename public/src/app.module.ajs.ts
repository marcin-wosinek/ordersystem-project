import * as angular from "angular";
import "angular-route";
import "reflect-metadata";

import "jquery";
import "lodash";

import {
  downgradeInjectable,
  downgradeComponent,
} from "@angular/upgrade/static";

// NG upgrade
import { CreateOrderComponent } from "./createOrder/create-order.component";
import { CustomerDetailComponent } from "./customerDetail/customer-detail.component";
import { CustomerService } from "./customers/customer.service";
import { CustomersComponent } from "./customers/customers.component";
import { CustomersTableComponent } from "./customers/customers-table.component";
import { HomeComponent } from "./home/home.component";
import { OrderService } from "./orders/order.service";
import { OrdersComponent } from "./orders/orders.component";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/app.scss";

import hashPrefixConfig from "./config.hashprefix";
import routeProviderConfig from "./config.routes";
import { NavigationComponent } from "./navigation/navigation.component";
import { DiscountComponent } from "./customerDetail/discount";
import validateDateDirective from "./directives/validateDate";
import { OrderDetailComponent } from "./orderDetail/order-detail.component";
import productsComponent from "./products/products";
import productDetailComponent from "./productDetail/productDetail";
import { AddressService } from "./shared/addressService";
import { ProductService } from "./products/productService";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "./styles/app.scss";

export const MODULE_NAME = "app";

angular
  .module(MODULE_NAME, ["ngRoute"])
  .config(hashPrefixConfig)
  .config(routeProviderConfig)
  .component("products", productsComponent)
  .component("productDetail", productDetailComponent)

  .service("addressService", AddressService)
  .service("productService", ProductService)
  .directive("validateDate", validateDateDirective)
  // NG upgrade
  .directive(
    "createOrder",
    downgradeComponent({
      component: CreateOrderComponent,
    }) as angular.IDirectiveFactory
  )
  .directive(
    "customerDetail",
    downgradeComponent({
      component: CustomerDetailComponent,
    }) as angular.IDirectiveFactory
  )
  .directive(
    "customers",
    downgradeComponent({
      component: CustomersComponent,
    }) as angular.IDirectiveFactory
  )
  .directive(
    "customersTable",
    downgradeComponent({
      component: CustomersTableComponent,
    }) as angular.IDirectiveFactory
  )
  .directive(
    "home",
    downgradeComponent({
      component: HomeComponent,
    }) as angular.IDirectiveFactory
  )
  .directive(
    "orders",
    downgradeComponent({
      component: OrdersComponent,
    }) as angular.IDirectiveFactory
  )
  .directive(
    "navigation",
    downgradeComponent({
      component: NavigationComponent,
    }) as angular.IDirectiveFactory
  )
  .directive(
    "discount",
    downgradeComponent({
      component: DiscountComponent,
    }) as angular.IDirectiveFactory
  )
  .directive(
    "orderDetail",
    downgradeComponent({
      component: OrderDetailComponent,
    }) as angular.IDirectiveFactory
  )
  .factory("customerService", downgradeInjectable(CustomerService))
  .factory("orderService", downgradeInjectable(OrderService));
