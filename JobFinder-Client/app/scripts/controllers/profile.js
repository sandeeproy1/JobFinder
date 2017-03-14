'use strict';

angular.module('clientApp')
  .controller('profileCtrl', function ($scope,$http,$rootScope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.window="profile";


    //service call
    if(! $rootScope.UserId){
      $rootScope.UserId =1; // default
      alert("applying 1 as userId");
    }
    var profile;
    $http.get('http://localhost:3000/getCandidateProfile/' + $rootScope.UserId).then(function (res) {
      console.log("profile");
      console.log(res.data);
      console.log("profile:--------");
      profile = res.data;
      console.log(profile);
      $scope.Profile = [];
      for(var i in profile){

        var str = i + " :  " + profile[i];
     //  alert("pshing" +str);
        $scope.Profile.push(str);
      }
      //fillProfile();
    });

    ///
    /*
    var profile1=[
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
    */

 var fillProfile = function() {
   $scope.Profile = [];
   for(var i in profile[0]){

     var str = i + " :  " + profile[0][i];

     $scope.Profile.push(str);
   }

 };


  });
