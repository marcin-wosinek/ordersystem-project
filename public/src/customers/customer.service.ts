import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";

import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { Customer } from "./customer.interface";

@Injectable()
export class CustomerService {
  constructor(private http: Http) {}

  getCustomers(): Observable<Customer[]> {
    return this.http
      .get("/api/customers")
      .pipe(map((response: Response) => response.json()));
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
