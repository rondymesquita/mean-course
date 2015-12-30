var contactController = function($scope, constants, $routeParams, contactService, $timeout){
    var _this = this;
    $scope.constants = constants;
    $scope.contacts = [];
    $scope.contact = {};
    $scope.onLoading = false;

    //console.log($routeParams.contatoId);

    $scope.showDialog = function(){
        //_this.showDialog("dialog");
        alert("msg");
    };

    $scope.list = function(){

        $scope.onLoading = true;

        contactService.list()
        .then(function(data){
            //console.log("Return on controller");
            $timeout(function(){
                $scope.contacts = data;
                $scope.onLoading = false;
            }, 2000);

        },function(data){
            console.log("error on controller");
        });

    };

    $scope.save = function(){
        //console.log($scope.contact);
        contactService.save($scope.contact)
        .then(function(data){
            console.log(data);
            $scope.list();
            //console.log("Return on controller");
        },function(data){
            console.log("error on controller");
        });
    }

    $scope.delete = function(contact){
        console.log(contact);
        contactService.delete(contact._id)
        .then(function(data){
            console.log(data);
            console.log("Return on controller");
            $scope.list();
        },function(data){
            console.log("error on controller");
        });
    }

    $scope.list();

};

contactController.prototype.showDialog = function(msg){
    alert(msg);
};

contactController.$inject = ['$scope','constants','$routeParams','contactService', '$timeout'];
angularModule.controller('ContactController',contactController);
