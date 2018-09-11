var app = angular.module('APP', ['ngRoute', 'LocalStorageModule']);

app.config(function ($routeProvider) {
    //for login page
    $routeProvider.when('/login', {
        templateUrl: 'APP/views/login.html',
        controller: 'loginController'
    });

    //for dashboard
    $routeProvider.when('/dashboard', {
        templateUrl: 'APP/views/dashboard.html',
        controller: 'dashController'
    });

    //for register page
    $routeProvider.when('/register', {
        templateUrl: 'APP/views/register.html',
        controller: 'registerController'
    });

    //for userlist page
    $routeProvider.when('/users', {
        templateUrl: 'APP/views/users.html',
        controller: 'userController'
    });

    //for edit user page
    $routeProvider.when('/editUser', {
        templateUrl: 'APP/views/edituser.html',
        controller: 'edituserController'
    });

    $routeProvider.otherwise({
        redirectTo: '/login',
    });
});