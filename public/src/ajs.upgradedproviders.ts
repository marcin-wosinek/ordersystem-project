import { ProductService } from "./products/productService";

export function locationServiceFactory(i: any) {
  return i.get("$location");
}

export const locationServiceProvider = {
  provide: "$location",
  useFactory: locationServiceFactory,
  deps: ["$injector"],
};

export function productServiceFactory(i: any) {
  return i.get("productService");
}

export const productServiceProvider = {
  provide: ProductService,
  useFactory: productServiceFactory,
  deps: ["$injector"],
};
