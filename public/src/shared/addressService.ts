import { Customer } from "../customers/customer.interface";

export class AddressService {
  constructor() {}

  //I used arrow syntax here in the video but I should have done this instead.
  getFullAddress(customer: Customer) {
    return (
      customer.address1 +
      ", " +
      customer.city +
      ", " +
      customer.state +
      " " +
      customer.zip
    );
  }
}

export default AddressService;

