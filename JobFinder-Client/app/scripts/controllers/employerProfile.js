/**
 * Created by ratan_000 on 5/7/2016.
 */
'use strict';

angular.module('clientApp')
  .controller('empProfileCtrl', function ($scope,$http,$rootScope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.window="eprofile";
   var employer ="employer1";
    //service call
    if(! $rootScope.UserId){
      $rootScope.UserId=2;
    }

    $scope.LoggedUserName =$rootScope.LoggedUserName="recruiter1@gmail.com"

    if(! $rootScope.UserId){
      $rootScope.UserId = 2;
      $rootScope.LoggedUserName="recruiter1@gmail.com"

    }
    var profile;
    $http.get('http://localhost:3000/getRecruiterProfile/' + $rootScope.UserId).then(function (res) {
      console.log("profile");
      console.log(res.data);
      profile = res.data;

      $scope.Profile = [];
      for(var i in profile[0]){

        var str = i + " :  " + profile[0][i];
        //alert("-->" + str);
        $scope.Profile.push(str);
      }
    });

    var profile2=[
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



  });
