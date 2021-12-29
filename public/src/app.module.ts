import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { UpgradeModule } from "@angular/upgrade/static";
import { MODULE_NAME } from "./app.module.ajs";

import { locationServiceProvider } from "./ajs.upgradedproviders";

import { AppRoutingModule } from "./app-routing.module";

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
import { ProductDetailComponent } from "./productDetail/product-detail.component";
import { AddressService } from "./shared/addressService";
import { ProductService } from "./products/productService";
import { ProductsComponent } from "./products/products.component";
import { AppComponent } from "./app.component";

@NgModule({
  imports: [
    BrowserModule,
    UpgradeModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    CustomersTableComponent,
    CustomersComponent,
    OrdersComponent,
    CreateOrderComponent,
    CustomerDetailComponent,
    DiscountComponent,
    NavigationComponent,
    OrderDetailComponent,
    ProductDetailComponent,
    ProductsComponent,
  ],
  bootstrap: [AppComponent],
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
    ProductDetailComponent,
    ProductsComponent,
    AppComponent,
  ],
  providers: [
    CustomerService,
    OrderService,
    locationServiceProvider,
    AddressService,
    ProductService,
  ],
})
export class AppModule {
  constructor() {}
}
