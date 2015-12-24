var angularModule = angular.module('catalogoApp',['ngMaterial'])
.run(function(){
    console.log("loaded");
}).config(function($httpProvider, $mdThemingProvider){

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
