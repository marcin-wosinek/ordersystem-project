import { Injectable } from '@angular/core';

import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';

import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

import { Product } from '../products/product.interface';
import { ProductService } from '../products/productService';

@Injectable()
export class ProductDetailResolver implements Resolve<Product | null> {
  constructor(private productService: ProductService, private router: Router) {}

  resolve(
    route: ActivatedRouteSnapshot,
    _state: RouterStateSnapshot
  ): Observable<Product | null> {
    let id = route.paramMap.get('productId');

    return this.productService.getProduct(id).pipe(
      take(1),
      map((product) => {
        if (product) {
          return product;
        } else {
          this.router.navigate(['/products']);

          return null;
        }
      })
    );
  }
}
