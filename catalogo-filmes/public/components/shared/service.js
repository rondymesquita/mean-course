var service = function($http, $resource, notify){


    this.list = function(){
        var promise = resource.query().$promise;
        promise.then(function(data){

        },function(data){
            notify.error( data.status +' : ' +data.data );
        });
        return promise;
    };

    this.save = function(data){
        var promise = resource.save(data).$promise;
        promise.then(function(data){

        },function(data){
            notify.error( data.status +' : ' +data.data );
        });
        return promise;
    }

    this.delete = function(id){
        console.log(id);
        var promise = resource.delete({id: id}).$promise;
        promise.then(function(data){

        },function(data){
            notify.error( data.status +' : ' +data.data );
        });
        return promise;
    }

}

service.$inject = ['$http','$resource','notify'];
angularModule.service('service',service);
