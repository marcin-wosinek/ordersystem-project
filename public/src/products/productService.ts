import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class ProductService {
  constructor(private $http: HttpClient) {}

  getProducts(): Promise<any[]> {
    return this.$http.get("/api/products").toPromise() as Promise<any[]>;
  }

  getProduct(id) {
    return this.$http.get(`/api/products/${id}`).toPromise();
  }

  postProduct(product) {
    return this.$http.post("/api/products", product).toPromise;
  }
}
