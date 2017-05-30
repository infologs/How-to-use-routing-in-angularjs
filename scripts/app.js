﻿// Code goes here
var app = angular.module("MyApp",["ngRoute"]);

app.config(function($routeProvider){
  $routeProvider
    .when("/",{
      template:"<h1>This is the main page</h1>"
    })
    .when("/red",{
      templateUrl: "red.html",
      controller:"cnt1"
    })
    .when("/green",{
      templateUrl: "green.html",
      controller:"cnt2"
    })
    .otherwise({
      template:"<h1>no page found</h1>"
    })
});

app.controller("cnt1", ["$scope",function($scope){

  $scope.message = "From Red page";

}]);

app.controller("cnt2", ["$scope",function($scope){

  $scope.message = "From Green page";

}]);