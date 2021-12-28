import { NgModule, DoBootstrap } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
import { UpgradeModule } from "@angular/upgrade/static";
import moduleName from "./app.module.ajs";

import {
  addressServiceProvider,
  locationServiceProvider,
  productServiceProvider,
} from "./ajs.upgradedproviders";

import { CustomersComponent } from "./customers/customers.component";
import { CustomersTableComponent } from "./customers/customers-table.component";
import { HomeComponent } from "./home/home.component";
import { OrdersComponent } from "./orders/orders.component";
import { CreateOrderComponent } from "./createOrder/create-order.component";
import { CustomerDetailComponent } from "./customerDetail/customer-detail.component";
import { CustomerService } from "./customers/customer.service";
import { OrderService } from "./orders/order.service";
import { DiscountDirective } from "./customerDetail/discount";

@NgModule({
  imports: [BrowserModule, UpgradeModule, HttpModule, FormsModule],
  declarations: [
    HomeComponent,
    CustomersTableComponent,
    CustomersComponent,
    OrdersComponent,
    CreateOrderComponent,
    CustomerDetailComponent,
    DiscountDirective,
  ],
  entryComponents: [
    HomeComponent,
    CustomersTableComponent,
    CustomersComponent,
    OrdersComponent,
    CreateOrderComponent,
    CustomerDetailComponent,
  ],
  providers: [
    CustomerService,
    OrderService,
    locationServiceProvider,
    productServiceProvider,
    addressServiceProvider,
  ],
})
export class AppModule implements DoBootstrap {
  constructor(private upgrade: UpgradeModule) {}

  ngDoBootstrap() {
    this.upgrade.bootstrap(document.documentElement, [moduleName], {
      strictDi: true,
    });
  }
}
