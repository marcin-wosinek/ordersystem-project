import { CustomerService } from "../customers/customer.service";
import { Observable, forkJoin, from } from "rxjs";

const template = require("./createOrder.html");

var createOrderComponent = {
  template: template,
  bindings: {},
  controller: createOrderComponentController,
};

createOrderComponentController.$inject = [
  "orderService",
  "customerService",
  "$location",
  "productService",
];
function createOrderComponentController(
  orderService,
  customerService: CustomerService,
  $location,
  productService
) {
  var vm = this;
  vm.title = "Create Order";

  vm.newOrder = {
    customerId: null,
    items: [
      {
        productId: null,
        quantity: null,
      },
      {
        productId: null,
        quantity: null,
      },
    ],
  };

  vm.$onInit = () => {
    let productData = from(productService.getProducts());
    forkJoin([productData, customerService.getCustomers()]).subscribe(
      (data) => {
        vm.products = data[0];
        vm.customers = data[1];
      }
    );
  };

  vm.postOrder = () => {
    vm.newOrder.items = vm.newOrder.items.filter((x) => x.productId !== null);

    return orderService.postOrder(vm.newOrder).then(() => {
      $location.path("/orders");
    });
  };
}

export default createOrderComponent;

