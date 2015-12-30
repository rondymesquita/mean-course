angularModule.config(function($routeProvider){
    $routeProvider
    .when('/contacts',{
        templateUrl:    'components/contact/contact.html',
        controller:     'ContactController'
    })
    .otherwise({
        redirectTo:    '/contacts'
    });
})
