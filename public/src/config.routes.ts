routeProviderConfig.$inject = ["$routeProvider"];
function routeProviderConfig($routeProvider) {
  $routeProvider
    .when("/", {
      template: "<home></home>",
    })
    .when("/customers", {
      template: "<customers></customers>",
    })
    .when("/orders", {
      template: "<orders></orders>",
    })
    .when("/orders/create", {
      template: "<create-order></create-order>",
    })
    .when("/products", {
      template: "<products></products>",
    })
    .when("/customers/:id", {
      template:
        '<customer-detail [customer]="$resolve.customer"></customer-detail>',
      resolve: {
        customer: [
          "$route",
          "customerService",
          function ($route, customerService) {
            var id = parseInt($route.current.params.id);
            return customerService.getCustomer(id).toPromise();
          },
        ],
      },
    })
    .when("/orders/:id", {
      template: '<order-detail [order]="$resolve.order"></order-detail>',
      resolve: {
        order: [
          "$route",
          "orderService",
          function ($route, orderService) {
            var id = parseInt($route.current.params.id);
            return orderService.getOrder(id);
          },
        ],
      },
    })
    .when("/products/:id", {
      template:
        '<product-detail [product]="$resolve.product"></product-detail>',
      resolve: {
        product: [
          "$route",
          "productService",
          function ($route, productService) {
            var id = parseInt($route.current.params.id);
            console.log("test??????????????????", id);
            return productService.getProduct(id);
          },
        ],
      },
    });
}

export default routeProviderConfig;
