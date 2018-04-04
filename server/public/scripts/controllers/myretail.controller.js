app.controller('MyRetailController', ['MyRetailService', function (MyRetailService) {
    var self = this;

    self.itmes = MyRetailService.items;
    MyRetailService.getItems();
}])
