import { Component, Inject, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

//Don't forget to import lodash
import * as _ from 'lodash';

import { CustomerService } from '../customers/customer.service';
import { ProductService } from '../products/productService';
import { Order } from '../orders/order.interface';
import { Customer } from '../customers/customer.interface';
import { Product } from '../products/product.interface';

import { Observable, forkJoin, from } from 'rxjs';

@Component({
  selector: 'order-details',
  templateUrl: './orderDetail.html',
})
export class OrderDetailComponent implements OnInit {
  title: string = 'Order Detail';

  order: Order;
  customer: Customer = {} as Customer;

  constructor(
    private productService: ProductService,
    private customerService: CustomerService,
    private route: ActivatedRoute
  ) {
    this.route.data.subscribe(({ order }) => {
      this.order = order;
    });
  }

  ngOnInit() {
    forkJoin([
      from(this.productService.getProducts()),
      this.customerService.getCustomer(this.order.customerId),
    ]).subscribe((data) => {
      var products = data[0] as Product[];
      this.customer = data[1] as Customer;

      this.order.items.forEach(function (item) {
        var product = _.find(products, function (product: Product) {
          return product.id === item.productId;
        });
        item.productName = product.name;
        item.itemPrice = item.quantity * product.price;
      });
    });
  }
}
