import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import {
  APP_BASE_HREF,
  HashLocationStrategy,
  LocationStrategy,
} from "@angular/common";

import { CreateOrderComponent } from "./createOrder/create-order.component";
import { CustomerDetailComponent } from "./customerDetail/customer-detail.component";
import { CustomersComponent } from "./customers/customers.component";
import { HomeComponent } from "./home/home.component";
import { OrderDetailComponent } from "./orderDetail/order-detail.component";
import { OrdersComponent } from "./orders/orders.component";
import { ProductDetailComponent } from "./productDetail/product-detail.component";
import { ProductsComponent } from "./products/products.component";

import { CustomerDetailResolver } from "./customerDetail/customer-detail.resolver";
import { OrderDetailResolver } from "./orderDetail/order-detail.resolver";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "customers", component: CustomersComponent },
  {
    path: "customers/:customerId",
    component: CustomerDetailComponent,
    resolve: { customer: CustomerDetailResolver },
  },
  { path: "orders/create", component: CreateOrderComponent },
  {
    path: "orders/:orderId",
    component: OrderDetailComponent,
    resolve: { order: OrderDetailResolver },
  },
  { path: "orders", component: OrdersComponent },
  { path: "products", component: ProductsComponent },
  { path: "products/:productId", component: ProductDetailComponent },
  { path: "", redirectTo: "/home", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    { provide: APP_BASE_HREF, useValue: "!" },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    CustomerDetailResolver,
    OrderDetailResolver,
  ],
})
export class AppRoutingModule {}
