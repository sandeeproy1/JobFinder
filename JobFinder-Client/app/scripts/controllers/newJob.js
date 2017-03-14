'use strict';

angular.module('clientApp')
  .controller('newJobCtrl', function ($scope,$http,$rootScope,$window) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.window="newJob";
    $scope.fromData =null;

    $scope.save= function save(user){
        alert(user.jobId);
      if(! $rootScope.UserId) {
         $rootScope.UserId =2;
      }
        user.UserId = $rootScope.UserId;
      $http.post("http://localhost:3000/createJob/", user ).success(function(data, status) {
          alert("Job posted Succesfully");
          $window.location ='#/employer'
      });
    };
    //service call
  });
