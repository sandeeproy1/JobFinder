'use strict';

angular.module('clientApp')
  .controller('signupCtrl', function ($scope,$rootScope,$http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.window="applied";

    if(!$rootScope.UserId){
      $rootScope.UserId=1; // applying default
    }
    //service call /appliedJobs/:UserId
    $http.get('http://localhost:3000/appliedJobs/' + $rootScope.UserId).then(function (res) {
      console.log("applied jobs");
      console.log(res.data);
      var applied=res.data;

      //
      $scope.appliedArr = [];
      for(var i in applied){

        var str = i + " :  " + " JOB-ID : " +applied[i].jobid + " |  COMPANY:  "+ applied[i].CompanyName;

        //alert("-->" + str);
        $scope.appliedArr.push(str);
      }
    });
   var applied1 =  [
      {
        "jobid": 135897,
        "jobtitle": "Assistant City Assessor",
        "CompanyName": "LAW DEPARTMENT"
      },
     {
       "jobid": 135898,
       "jobtitle": "Assistant City Assessor",
       "CompanyName": "LAW DEPARTMENT"
     },
     {
       "jobid": 135899,
       "jobtitle": "Assistant City Assessor",
       "CompanyName": "LAW DEPARTMENT"
     },
     {
       "jobid": 135900,
       "jobtitle": "Assistant City Assessor",
       "CompanyName": "LAW DEPARTMENT"
     },
     {
       "jobid": 135901,
       "jobtitle": "Assistant City Assessor",
       "CompanyName": "LAW DEPARTMENT"
     },
     {
       "jobid": 135902,
       "jobtitle": "Assistant City Assessor",
       "CompanyName": "LAW DEPARTMENT"
     }
    ];



  });
