import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product } from '../products/product.interface';

@Component({
  selector: 'product-detail',
  templateUrl: './productDetail.html',
})
export class ProductDetailComponent {
  title = 'Product Detail';
  product: Product;

  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe(({ product }) => {
      this.product = product;
    });
  }
}
