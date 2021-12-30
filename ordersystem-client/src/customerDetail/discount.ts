import { Component, Input, Output, EventEmitter } from "@angular/core";

import { Discount } from "./discount.interface";

@Component({
  selector: "discount",
  templateUrl: "./discount.html",
})
export class DiscountComponent {
  @Input() customerDiscount: Discount;
  @Output() update: EventEmitter<Discount> = new EventEmitter<Discount>();

  editDiscount: boolean = false;
  selectedDiscount: Discount;

  discounts: Discount[] = [
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

  constructor() {}

  editDiscountType() {
    this.editDiscount = true;
  }

  updateDiscountType() {
    console.log("this.selectedDiscount", this.selectedDiscount);

    this.update.emit(this.selectedDiscount);
    this.editDiscount = false;
  }
}
