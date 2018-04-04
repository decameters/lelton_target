app.controller('DetailsController', ['MyRetailService', '$routeParams', function (MyRetailService, $routeParams) {
    var self = this;

    self.productdetail = MyRetailService.productdetail;

    self.productId = $routeParams.id
    self.getProductDetails = MyRetailService.getProductDetails($routeParams.id);
    console.log('id ',$routeParams.id);
    
}])


