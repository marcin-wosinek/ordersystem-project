import {
  Directive,
  ElementRef,
  Injector,
  Input,
  Output,
  EventEmitter,
} from "@angular/core";
import { UpgradeComponent } from "@angular/upgrade/static";

const template = require("./discount.html");

export const discountComponent = {
  template: template,
  bindings: {
    customerDiscount: "<",
    update: "&",
  },
  controller: discountComponentController,
};

function discountComponentController() {
  var vm = this;

  vm.editDiscount = false;

  vm.editDiscountType = function () {
    vm.editDiscount = true;
  };

  vm.updateDiscountType = function () {
    vm.update({ discount: vm.selectedDiscount });
    vm.editDiscount = false;
  };

  vm.discounts = [
    {
      discountId: 1,
      discountPercent: 10,
      discountName: "Employee",
    },
    {
      discountId: 2,
      discountPercent: 5,
      discountName: "Friends & Family",
    },
    {
      discountId: 3,
      discountPercent: 20,
      discountName: "Famous Drummer",
    },
  ];
}

@Directive({
  selector: "discount",
})
export class DiscountDirective extends UpgradeComponent {
  @Input() customerDiscount: {};
  @Output() update: EventEmitter<{}>;

  constructor(elementRef: ElementRef, injector: Injector) {
    super("discount", elementRef, injector);
  }
}

