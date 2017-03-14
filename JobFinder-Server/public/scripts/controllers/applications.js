'use strict';

angular.module('clientApp')
  .controller('signupCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.window="applied";

    //service call
   var applied =  [
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

    $scope.appliedArr = [];
    for(var i in applied){

      var str = i + " :  " + " JOB-ID : " +applied[i].jobid + " |  COMPANY:  "+ applied[i].CompanyName;

      //alert("-->" + str);
      $scope.appliedArr.push(str);
    }

  });
