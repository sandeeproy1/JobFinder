'use strict';

angular.module('clientApp')
  .controller('profileCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.window="profile";

    //service call
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
