import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";
import { Product } from "../products/product.interface";

@Injectable()
export class ProductService {
  constructor(private $http: HttpClient) {}

  getProducts(): Promise<any[]> {
    return this.$http.get("/api/products").toPromise() as Promise<any[]>;
  }

  getProduct(id) {
    return this.$http.get(`/api/products/${id}`) as Observable<Product>;
  }

  postProduct(product) {
    return this.$http.post("/api/products", product).toPromise();
  }
}
