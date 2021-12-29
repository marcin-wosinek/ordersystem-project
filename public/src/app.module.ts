import { NgModule, DoBootstrap } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { UpgradeModule } from "@angular/upgrade/static";
import { MODULE_NAME } from "./app.module.ajs";

import {
  addressServiceProvider,
  locationServiceProvider,
  productServiceProvider,
  qServiceProvider,
} from "./ajs.upgradedproviders";

import { CustomersComponent } from "./customers/customers.component";
import { CustomersTableComponent } from "./customers/customers-table.component";
import { HomeComponent } from "./home/home.component";
import { OrdersComponent } from "./orders/orders.component";
import { CreateOrderComponent } from "./createOrder/create-order.component";
import { CustomerDetailComponent } from "./customerDetail/customer-detail.component";
import { CustomerService } from "./customers/customer.service";
import { OrderService } from "./orders/order.service";
import { DiscountComponent } from "./customerDetail/discount";
import { NavigationComponent } from "./navigation/navigation.component";
import { OrderDetailComponent } from "./orderDetail/order-detail.component";

@NgModule({
  imports: [BrowserModule, UpgradeModule, HttpClientModule, FormsModule],
  declarations: [
    HomeComponent,
    CustomersTableComponent,
    CustomersComponent,
    OrdersComponent,
    CreateOrderComponent,
    CustomerDetailComponent,
    DiscountComponent,
    NavigationComponent,
    OrderDetailComponent,
  ],
  entryComponents: [
    HomeComponent,
    CustomersTableComponent,
    CustomersComponent,
    OrdersComponent,
    CreateOrderComponent,
    CustomerDetailComponent,
    NavigationComponent,
    DiscountComponent,
    OrderDetailComponent,
  ],
  providers: [
    CustomerService,
    OrderService,
    locationServiceProvider,
    productServiceProvider,
    qServiceProvider,
    addressServiceProvider,
  ],
})
export class AppModule implements DoBootstrap {
  constructor(private upgrade: UpgradeModule) {}

  ngDoBootstrap() {
    this.upgrade.bootstrap(document.documentElement, [MODULE_NAME], {
      strictDi: true,
    });
  }
}
