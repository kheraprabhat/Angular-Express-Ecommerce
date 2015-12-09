(function(app) {
    app.controller("AuthenticationMainCtrl", ["authenticationSrvc", "$http", "$location", function(authenticationSrvc, http, location) {
        var vm = this;
        vm.user = {
            username: "",
            password: ""
        };
        vm.alert = "";
        vm.login = function(user) {
            http.post("/auth/login", user).success(function(data) {
                vm.loggeduser = data;
                authenticationSrvc.changeAuthStatus('login');
                location.path("/myaccount");
            }).error(function() {
                vm.alert = "Login failed";
            });
        };
        vm.signup = function(user) {
            http.post("/auth/signup", user).success(function(data) {
                vm.alert = data.alert;
            }).error(function() {
                vm.alert = "Registration failed";
            });
        };
        vm.userinfo = function() {
            http.get("/auth/currentuser").success(function(data) {
                vm.loggeduser = data;
            }).error(function() {
                location.path("/signin");
            });
        };
    }]);
})(angular.module("Meanapp"));