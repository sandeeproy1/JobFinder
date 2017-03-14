/**
 * Created by ratan_000 on 5/7/2016.
 */
'use strict';

angular.module('clientApp')
  .controller('empProfileCtrl', function ($scope,$http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.window="eprofile";
   var employer ="employer1";
    //service call
    $http.get("/getEmployerProfile/"+ employer ).success(function(data, status) {
      console.log("posted successfully");
      // resultJob = data;
    });
    var profile=[
      {
        "UserId":1,
        "Email":"sandeeproy22@gmail.com",
        "FName":"Sandeep",
        "LName":"Roy",
        "Gender":"Male",
        "DOB":"2000-02-06T08:00:00.000Z",
        "Address":"Adress",
        "Phone":"123456789",
        "Skills":"Skills",
        "Experience":"5 yrs in IT industry",
        "Resume":"Resume",
        "DegreeDesc":"Bachelors",
        "UserTypeDesc":"JobSeeker"
      }
    ];

    $scope.Profile = [];
    for(var i in profile[0]){

      var str = i + " :  " + profile[0][i];
      //alert("-->" + str);
      $scope.Profile.push(str);
    }

  });
