var angularModule = angular.module('contactApp',['ngMaterial','ngRoute','ngResource'])
.run(function(){
    console.log("Loaded");
    console.log("======");
}).config(function($httpProvider, $mdThemingProvider){

    // Don't strip trailing slashes from calculated URLs
  // $resourceProvider.defaults.stripTrailingSlashes = false

    $mdThemingProvider.theme('default')
        .primaryPalette('indigo')
        .accentPalette('pink');

});

angularModule.directive('ngEnter', function () {
    return function (scope, element, attrs) {

        element.bind("keydown keypress", function (event) {

        	if(event.which === 13) {
                scope.$apply(function (){
                    scope.$eval(attrs.ngEnter);
                });

                event.preventDefault();
            }
        });
    };
});
