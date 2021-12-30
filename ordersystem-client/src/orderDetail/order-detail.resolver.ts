import { Injectable } from '@angular/core';

import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';

import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

import { Order } from '../orders/order.interface';
import { OrderService } from '../orders/order.service';

@Injectable()
export class OrderDetailResolver implements Resolve<Order | null> {
  constructor(private orderService: OrderService, private router: Router) {}

  resolve(
    route: ActivatedRouteSnapshot,
    _state: RouterStateSnapshot
  ): Observable<Order | null> {
    let id = route.paramMap.get('orderId');

    return this.orderService.getOrder(id).pipe(
      take(1),
      map((order) => {
        if (order) {
          return order;
        } else {
          this.router.navigate(['/orders']);

          return null;
        }
      })
    );
  }
}
