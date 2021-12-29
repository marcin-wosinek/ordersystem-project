import { Component, Input } from "@angular/core";

import { Product } from "../products/product.interface";

@Component({
  selector: "product-detail",
  templateUrl: "./productDetail.html",
})
export class ProductDetailComponent {
  title = "Product Detail";
  @Input() product: Product;

  constructor() {}
}
