app.controller('userController', function ($scope, $location, Allservice, $route, localStorageService) {
    $scope.datas = {};
    $scope.datas2 = {};
    $scope.datas3 = {};
    $scope.datas4 = {};
    $scope.newuserdata = {};

    $scope.logout = function () {
        $location.path('/login');
        swal({
            title: "Logged out",
            text: "Successfully Logged out!",
            icon: "success",
            button: "Close",
        });
    }

    //GETTING ALL USERS DATA(page 1)
    Allservice.getuser().then(function (response) {
        $scope.datas = response.data;
    }, function (error) {
        swal({
            title: "Some Internal Error Occured",
            text: "Please try again After some time",
            icon: "warning",
            button: "Close",
        });
    });

    //GETTING ALL USERS DATA(page 2)
    Allservice.getuserp2().then(function (response) {
        $scope.datas = response.data;
    }, function (error) {
        swal({
            title: "Some Internal Error Occured",
            text: "Please try again After some time",
            icon: "warning",
            button: "Close",
        });
    });

    //GETTING ALL USERS DATA(page 3)
    Allservice.getuserp3().then(function (response) {
        $scope.datas = response.data;
    }, function (error) {
        swal({
            title: "Some Internal Error Occured",
            text: "Please try again After some time",
            icon: "warning",
            button: "Close",
        });
    });

    //GETTING ALL USERS DATA(page 4)
    Allservice.getuserp4().then(function (response) {
        $scope.datas = response.data;
    }, function (error) {
        swal({
            title: "Some Internal Error Occured",
            text: "Please try again After some time",
            icon: "warning",
            button: "Close",
        });
    });

    //function on clicking edit option
    $scope.edit = function (id) {
        localStorageService.set('Id', id);
        $location.path('/editUser');
    }

    //function on clicking delete option
    $scope.delete = function (id) {
        Allservice.deleteuser(id).then(function (sussess) {
            swal({
                title: "User Deleted",
                text: "User Has Been Deleted",
                icon: "success",
                button: "Close",
            });
        }, function (error) { //handeling error
            swal({
                title: "Some Internal Error Occured",
                text: "User is not Deleted due to some Internal error",
                icon: "warning",
                button: "Close",
            });
        });
    }

    //function on adding new user
    $scope.action = function () {
        $scope.newuserdata = {
            first_name: $scope.name,
            last_name: $scope.name,
            avatar: $scope.job
        }
        Allservice.createuser($scope.newuserdata).then(function (suss) {
            
            swal({
                title: "User Added",
                text: $scope.name + "Has Been Added",
                icon: "success",
                button: "Close",
            });
        }, function (error) { //handeling error
            swal({
                title: "Some Internal Error Occured",
                text: "User can't be Added due to some internal error",
                icon: "warning",
                button: "Close",
            });
        });
    }

});