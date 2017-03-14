/**
 * Created by ratan_000 on 5/9/2016.
 */

'use strict';
angular.module('clientApp')
  .controller('loginCtrl', function ($scope,$http,$rootScope,$window) {

  $scope.users={};

    $scope.validate = function (usr) {
     // alert(usr.name + " " + usr.password);
      //usr.password;
      $http.get('http://localhost:3000/authenticate' +'/'+ usr.name+'/' + usr.password).then(function(res) {

        console.log(res);
        if(res.data.status == "ok"){
          alert("successfull login");
          $rootScope.UserId=res.data.UserId;
          $rootScope.LoggedUserName="from "
          getProfile();
        }else{
            alert("login failed + check CORS");
        }
      }, function(e){
        // alert("");
        console.log(e);
      });


    };

    var getProfile = function() {
      $http.get('http://localhost:3000/getprofile/' + $rootScope.UserId).then(function (res) {
      console.log("profile login page");
        console.log(res);
        $rootScope.loggedUser=res;
        $rootScope.loggedUserEmail=res.data.Email;
      // alert($rootScope.loggedUserID);


       // alert("profile saved locally");

        if($rootScope.UserId == 1){
          $window.location.href = '#/';
        } else{
          $window.location.href = '#/employer';
        }

      });
    }

  });
