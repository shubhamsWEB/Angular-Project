app.controller('loginController', function ($scope, $route, $location, Allservice, localStorageService) {
    $scope.login = function () {
        $location.path('/dashboard');
    }
    $scope.register = function () {
        $location.path('/register');
    }
});