app.factory('Allservice', function ($http) {
    var homefactory = {};

    //service for getting All Users
    homefactory.getuser = function () { 
        return $http.get("https://reqres.in/api/users?page=1");
    }

    homefactory.getuserp2 = function () {
        return $http.get("https://reqres.in/api/users?page=2");
    }

    homefactory.getuserp3 = function () {
        return $http.get("https://reqres.in/api/users?page=3");
    }

    homefactory.getuserp4 = function () {
        return $http.get("https://reqres.in/api/users?page=4");
    }

    //service for getting one User
    homefactory.user = function (id) { 
        return $http.get("https://reqres.in/api/users/" + id );
    }

    //service for creating new user
    homefactory.createuser = function (data) { 
        return $http.post("https://reqres.in/api/users",data);
    }

    //service for updating user
    homefactory.updateuser = function (data) { 
        return $http.put("https://reqres.in/api/users/" + data.id , data);
    }

    //service for deleting user
    homefactory.deleteuser = function (data) { 
        return $http.delete("https://reqres.in/api/users/" + data , data);
    }
    return homefactory;
});