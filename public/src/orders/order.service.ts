import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { Order } from "./order.interface";

@Injectable()
export class OrderService {
  constructor(private http: HttpClient) {}

  getOrders(): Promise<Order[]> {
    return this.http.get("/api/orders").toPromise() as Promise<Order[]>;
  }

  getOrder(id): Promise<Order[]> {
    return this.http.get(`/api/orders/${id}`).toPromise() as Promise<Order[]>;
  }

  getOrdersByCustomer(customerId): Promise<Order[]> {
    return this.http
      .get(`/api/customers/${customerId}/orders`)
      .toPromise() as Promise<Order[]>;
  }

  postOrder(order: Order): Observable<Order> {
    return this.http.post("/api/orders", order) as Observable<Order>;
  }
}
