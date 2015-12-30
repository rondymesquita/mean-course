var indexController = function($scope,constants){
    var _this = this;

    $scope.showDialog = function(){
        alert("dialog");
    }
};

indexController.prototype.doStuff = function(){

};

indexController.$inject = ['$scope','constants'];
angularModule.controller('IndexController',indexController);
