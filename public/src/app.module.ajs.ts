import * as angular from "angular";
import "angular-route";

import "jquery";
import "lodash";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/app.scss";

import hashPrefixConfig from "./config.hashprefix";
import routeProviderConfig from "./config.routes";
import navigationComponent from "./navigation/navigation";
import customerDetailComponent from "./customerDetail/customerDetail";
import discountComponent from "./customerDetail/discount";
import validateDateDirective from "./directives/validateDate";
import ordersComponent from "./orders/orders";
import createOrderComponent from "./createOrder/createOrder";
import orderDetailComponent from "./orderDetail/orderDetail";
import productsComponent from "./products/products";
import productDetailComponent from "./productDetail/productDetail";
import AddressService from "./shared/addressService";
import ProductService from "./products/productService";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "./styles/app.scss";

const MODULE_NAME = "app";

angular
  .module(MODULE_NAME, ["ngRoute"])
  .config(hashPrefixConfig)
  .config(routeProviderConfig)
  .component("navigation", navigationComponent)
  .component("customerDetail", customerDetailComponent)
  .component("discount", discountComponent)
  .component("orders", ordersComponent)
  .component("orderDetail", orderDetailComponent)
  .component("products", productsComponent)
  .component("productDetail", productDetailComponent)
  .service("addressService", AddressService)
  .service("productService", ProductService)
  .component("createOrder", createOrderComponent)
  .directive("validateDate", validateDateDirective);

export default MODULE_NAME;
