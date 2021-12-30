import { Component, OnInit } from "@angular/core";

import { Product } from "./product.interface";
import { ProductService } from "./productService";

@Component({
  selector: "products",
  templateUrl: "./products.html",
})
export class ProductsComponent implements OnInit {
  title: "Products";

  products: Product[];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getProducts().then((data) => (this.products = data));
  }
}
