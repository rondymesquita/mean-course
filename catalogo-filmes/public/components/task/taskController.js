angularModule.controller('TodoController',['$http','$scope', 'constants', MoviesController]);
function MoviesController($http, $scope, constants){
	$scope.constants = constants;

	// $http.get('/list')
	// .success(function(response){
	// 	console.log(response);
	// 	$scope.movies = response;
	// }).error(function(){
	//
	// })['finally'](function(){
	//
	// });

	$scope.tasks = [];
	$scope.addTask = function(){
		var task = {id:guid(), name:$scope.task};
		$scope.tasks.push(task);
	}

	$scope.removeTask = function(){
    	$scope.tasks.splice(index, 1);
    }

	function guid() {
	    function _p8(s) {
	        var p = (Math.random().toString(16)+"000000000").substr(2,8);
	        return s ? "-" + p.substr(0,4) + "-" + p.substr(4,4) : p ;
	    }
	    return _p8() + _p8(true) + _p8(true) + _p8();
	}
}
