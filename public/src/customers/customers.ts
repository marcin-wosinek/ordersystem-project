const template = require("./customers.html");

const customersComponent = {
  template: template,
  bindings: {},
  controller: customersComponentController,
};

import { CustomerService } from "./customer.service";

customersComponentController.$inject = ["customerService"];
function customersComponentController(customerService: CustomerService) {
  var vm = this;
  vm.title = "Customers";

  vm.$onInit = () => {
    customerService.getCustomers().subscribe((data) => {
      vm.customers = data;
    });
  };
}

export default customersComponent;

