import { NgModule, DoBootstrap } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";
import { UpgradeModule } from "@angular/upgrade/static";
import moduleName from "./app.module.ajs";

import { HomeComponent } from "./home/home.component";
import { CustomersTable } from "./customers/customers-table.component";
import { CustomerService } from "./customers/customer.service";

@NgModule({
  imports: [BrowserModule, UpgradeModule, HttpModule],
  declarations: [HomeComponent, CustomersTable],
  entryComponents: [HomeComponent, CustomersTable],
  providers: [CustomerService],
})
export class AppModule implements DoBootstrap {
  constructor(private upgrade: UpgradeModule) {}

  ngDoBootstrap() {
    this.upgrade.bootstrap(document.documentElement, [moduleName], {
      strictDi: true,
    });
  }
}