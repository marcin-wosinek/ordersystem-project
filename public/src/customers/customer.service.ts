import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { downgradeInjectable } from "@angular/upgrade/static";

declare var angular: angular.IAngularStatic;

@Injectable()
export class CustomerService {
  constructor(private http: Http) {}

  getCustomers(): ng.IPromise<any> {
    return this.http
      .get("/api/customers")
      .toPromise()
      .then((response: Response) => response.json());
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

angular
  .module("app")
  .factory("customerService", downgradeInjectable(CustomerService));

