import * as _ from "lodash";
import { CustomerService } from "../customers/customer.service";
import { Observable, forkJoin, from } from "rxjs";

const template = require("./orders.html");

const ordersComponent = {
  template: template,
  bindings: {},
  controller: ordersComponentController,
};

ordersComponentController.$inject = [
  "orderService",
  "customerService",
  "$location",
];
function ordersComponentController(
  orderService,
  customerService: CustomerService,
  $location
) {
  var vm = this;
  vm.title = "Orders";

  vm.$onInit = function () {
    let ordersData = from(orderService.getOrders());
    forkJoin([ordersData, customerService.getCustomers()]).subscribe((data) => {
      vm.orders = data[0];
      vm.customers = data[1];
      vm.orders.forEach(function (order) {
        var customer = _.find(vm.customers, function (customer) {
          return order.customerId === customer.id;
        });
        order.customerName = customer.fullName;
      });
    });
  };

  vm.goToCreateOrder = () => {
    $location.path("/orders/create");
  };
}

export default ordersComponent;
