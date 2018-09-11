app.controller('edituserController', function ($scope, $location, Allservice, $route, localStorageService) {
    $scope.userData = {};
    $scope.data = {};
    $scope.userId = localStorageService.get('Id'); //getting localstorage data

    //getting user data through "Id"
    Allservice.user($scope.userId).then(function (response) {
        $scope.userData = response.data;
    });

    //function on clicking "SAVE CHANGES"
    $scope.action = function () {
        if ($scope.fname != null) { //checking if the first name is same
            $scope.userData.data.first_name = $scope.fname;
        }
        if ($scope.lname != null) { //checking if the last name is same
            $scope.userData.data.last_name = $scope.lname;
        }
        $scope.data = {
            id: $scope.userData.data.id,
            first_name: $scope.userData.data.first_name,
            last_name: $scope.userData.data.last_name,
            avatar: $scope.userData.data.avatar
        }

        //Updating new data in Database
        Allservice.updateuser($scope.data).then(function (success) {
            swal({
                title: "User Updated",
                text: $scope.fname +  "Has Been Updated",
                icon: "success",
                button: "Close",
            });
            $location.path('/users');
        },function (error) { //handeling error
            swal({
                title: "Some Internal Error Occured",
                text: "Please try again After some time",
                icon: "warning",
                button: "Close",
            });
        });
    }
});