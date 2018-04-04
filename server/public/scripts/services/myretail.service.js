app.service('MyRetailService', ['$http', function ($http) {
    var self = this;

    self.items = { list: [] };

    // self.moviedetail = { list: [] };

    self.getItems = function () {

        $http({
            method: 'GET',
            url: '/items'
        }).then(function (response) {
            console.log('response', response);
            self.items.list = response.data;
        })
    }

    

}]);
