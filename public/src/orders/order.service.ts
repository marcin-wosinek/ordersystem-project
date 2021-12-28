import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";

import { downgradeInjectable } from "@angular/upgrade/static";
declare var angular: angular.IAngularStatic;

import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { Order } from "./order.interface";

@Injectable()
export class OrderService {
  constructor(private http: Http) {
    this.http = http;
  }

  getOrders(): Promise<Order[]> {
    return this.http
      .get("/api/orders")
      .toPromise()
      .then((response) => response.json());
  }

  getOrder(id): Promise<Order[]> {
    return this.http
      .get(`/api/orders/${id}`)
      .toPromise()
      .then((response) => response.json());
  }

  getOrdersByCustomer(customerId): Promise<Order[]> {
    return this.http
      .get(`/api/customers/${customerId}/orders`)
      .toPromise()
      .then((response) => response.json());
  }

  postOrder(order: Order): Observable<Order> {
    return this.http
      .post("/api/orders", order)
      .pipe(map((response) => response.json()));
  }
}

angular
  .module("app")
  .factory("orderService", downgradeInjectable(OrderService));
