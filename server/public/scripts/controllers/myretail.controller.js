app.controller('MyRetailController', ['MyRetailService', function (MyRetailService) {
    var self = this;

    self.items = MyRetailService.items;
    MyRetailService.getItems();
}])
