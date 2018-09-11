app.controller('registerController', function ($scope, $location, Allservice, $route, localStorageService) {
    $scope.checkpassword = function () {
        if ($scope.pass != $scope.cpass) {
            $scope.check = "Password does not match";
        } else {
            $scope.check = "";
        }
    }
    $scope.login = function () {
        $location.path('/login');
    }
});