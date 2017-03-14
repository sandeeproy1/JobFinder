'use strict';

angular.module('clientApp')
  .controller('newJobCtrl', function ($scope,$http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.window="newJob";
    $scope.fromData =null;

    $scope.save= function save(user){
        alert(user.jobId);
      $http.post("/createJob/", user ).success(function(data, status) {

      });
    };
    //service call
  });
