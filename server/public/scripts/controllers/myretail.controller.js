app.controller('MyRetailController', ['MyRetailService', function (MyRetailService) {
    var self = this;

    self.products = MyRetailService.products;
    MyRetailService.getProducts();
}])
