import { NgModule, DoBootstrap } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";
import { UpgradeModule } from "@angular/upgrade/static";
import moduleName from "./app.module.ajs";

import { HomeComponent } from "./home/home.component";
import { CustomersTableComponent } from "./customers/customers-table.component";
import { CustomersComponent } from "./customers/customers.component";
import { CustomerService } from "./customers/customer.service";
import { OrderService } from "./orders/order.service";

@NgModule({
  imports: [BrowserModule, UpgradeModule, HttpModule],
  declarations: [HomeComponent, CustomersTableComponent, CustomersComponent],
  entryComponents: [HomeComponent, CustomersTableComponent, CustomersComponent],
  providers: [CustomerService, OrderService],
})
export class AppModule implements DoBootstrap {
  constructor(private upgrade: UpgradeModule) {}

  ngDoBootstrap() {
    this.upgrade.bootstrap(document.documentElement, [moduleName], {
      strictDi: true,
    });
  }
}
