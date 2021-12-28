import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { Customer } from "./customer.interface";

@Injectable()
export class CustomerService {
  constructor(private http: HttpClient) {}

  getCustomers(): Observable<Customer[]> {
    return this.http.get("/api/customers") as Observable<Customer[]>;
  }

  getCustomer(id): ng.IPromise<any> {
    return this.http
      .get(`/api/customers/${id}`)
      .toPromise()
      .then((response: Response) => response.json());
  }

  postCustomer(customer): ng.IPromise<any> {
    return this.http
      .post("/api/customers", customer)
      .toPromise()
      .then((data) => data);
  }
}
