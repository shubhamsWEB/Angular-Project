app.controller('dashController', function ($scope, $route, $location, Allservice, localStorageService) {
    //function on clicking logout
    $scope.logout = function () {
        $location.path('/login');
        swal({
            title: "Logged out",
            text: "Successfully Logged out!",
            icon: "success",
            button: "Close",
        });
    }
    
});